import { Hono } from "hono";
import { stream } from "hono/streaming";
import { bodyLimit } from "hono/body-limit";
import { bearerAuth } from "hono/bearer-auth";
import { HailoLLM, type Message, type LLMGeneratorParams } from "./llm";
import type { ServerConfig } from "./config";
import type { Mutex } from "./mutex";

interface ChatMessage {
  role: "system" | "user" | "assistant";
  content: string;
}

interface ChatRequest {
  model?: string;
  messages?: unknown;
  stream?: boolean;
  options?: Record<string, unknown>;
}

interface GenerateRequest {
  model?: string;
  prompt?: unknown;
  system?: unknown;
  stream?: boolean;
  options?: Record<string, unknown>;
}

const MAX_BODY_BYTES = 1024 * 1024;
const MAX_GENERATED_TOKENS = 4096;
const VALID_ROLES = new Set(["system", "user", "assistant"]);

// ChatML control tokens. The prompt is assembled by interpolating message
// content between <|im_start|>/<|im_end|> markers, so any of these tokens in
// client-supplied text would let the client forge system messages.
const CONTROL_TOKEN_RE = /<\|(?:im_start|im_end|endoftext)\|>/g;

function sanitizeContent(text: string): string {
  return text.replace(CONTROL_TOKEN_RE, "");
}

function validateMessages(value: unknown): ChatMessage[] | null {
  if (!Array.isArray(value) || value.length === 0) return null;
  const out: ChatMessage[] = [];
  for (const item of value) {
    if (typeof item !== "object" || item === null) return null;
    const { role, content } = item as Record<string, unknown>;
    if (typeof role !== "string" || !VALID_ROLES.has(role)) return null;
    if (typeof content !== "string") return null;
    out.push({
      role: role as ChatMessage["role"],
      content: sanitizeContent(content),
    });
  }
  return out;
}

function clamp(value: number, min: number, max: number): number {
  return Math.min(max, Math.max(min, value));
}

function mapOptions(
  options: Record<string, unknown> | undefined,
): Partial<LLMGeneratorParams> {
  if (!options || typeof options !== "object") return {};
  const mapped: Partial<LLMGeneratorParams> = {};
  if (typeof options.temperature === "number")
    mapped.temperature = clamp(options.temperature, 0, 2);
  if (typeof options.top_p === "number")
    mapped.topP = clamp(options.top_p, 0, 1);
  if (typeof options.top_k === "number")
    mapped.topK = clamp(Math.floor(options.top_k), 1, 1000);
  if (typeof options.num_predict === "number" && options.num_predict > 0)
    mapped.maxGeneratedTokens = clamp(
      Math.floor(options.num_predict),
      1,
      MAX_GENERATED_TOKENS,
    );
  if (
    typeof options.seed === "number" &&
    Number.isFinite(options.seed) &&
    options.seed !== 0
  )
    mapped.seed = options.seed;
  if (typeof options.frequency_penalty === "number")
    mapped.frequencyPenalty = clamp(options.frequency_penalty, -2, 2);
  if (typeof options.repeat_penalty === "number")
    mapped.frequencyPenalty = clamp(options.repeat_penalty, -2, 2);
  return mapped;
}

const STOP_SEQUENCES = ["<|im_end|>", "<|im_start|>", "<|endoftext|>"];

function containsStopSequence(buffer: string): boolean {
  return STOP_SEQUENCES.some((seq) => buffer.includes(seq));
}

function trimAtStopSequence(text: string): string {
  let earliest = text.length;
  for (const seq of STOP_SEQUENCES) {
    const idx = text.indexOf(seq);
    if (idx !== -1 && idx < earliest) earliest = idx;
  }
  return text.substring(0, earliest);
}

function prependSystemPrompt(
  messages: ChatMessage[],
  config: ServerConfig,
): Message[] {
  const result: Message[] = messages.map((m) => ({
    role: m.role,
    content: m.content,
  }));
  if (result.length > 0 && result[0].role !== "system" && config.systemPrompt) {
    result.unshift({ role: "system", content: config.systemPrompt });
  }
  return result;
}

export function createApp(
  llm: HailoLLM,
  mutex: Mutex,
  config: ServerConfig,
): Hono {
  const app = new Hono();

  app.use("/api/*", bodyLimit({ maxSize: MAX_BODY_BYTES }));
  if (config.apiKey) {
    app.use("/api/*", bearerAuth({ token: config.apiKey }));
  }

  const acquireOrBusy = async (): Promise<(() => void) | null> => {
    try {
      return await mutex.acquire();
    } catch {
      return null;
    }
  };

  // GET / — Ollama health check (clients probe this first)
  app.get("/", (c) => {
    return c.text("Ollama is running");
  });

  // HEAD / — health check variant
  app.on("HEAD", "/", (c) => {
    return c.body(null, 200);
  });

  // POST /api/chat
  app.post("/api/chat", async (c) => {
    let body: ChatRequest;
    try {
      body = await c.req.json();
    } catch {
      return c.json({ error: "invalid JSON body" }, 400);
    }
    const validated = validateMessages(body.messages);
    if (!validated) {
      return c.json(
        {
          error:
            "messages must be a non-empty array of {role, content} with role one of system|user|assistant and string content",
        },
        400,
      );
    }
    const messages = prependSystemPrompt(validated, config);
    const params = mapOptions(body.options);
    const model = config.modelDisplayName;
    const shouldStream = body.stream !== false;

    const release = await acquireOrBusy();
    if (!release) {
      return c.json({ error: "server busy, try again later" }, 503);
    }

    if (shouldStream) {
      return stream(c, async (s) => {
        c.header("Content-Type", "application/x-ndjson");

        const startTime = Date.now();
        let tokenCount = 0;
        let aborted = false;

        s.onAbort(() => {
          aborted = true;
        });

        try {
          let buffer = "";
          for await (const token of llm.generate(messages, params)) {
            if (aborted) break;
            buffer += token;
            if (containsStopSequence(buffer)) break;
            tokenCount++;
            const chunk = JSON.stringify({
              model,
              created_at: new Date().toISOString(),
              message: { role: "assistant", content: token },
              done: false,
            });
            await s.write(chunk + "\n");
          }

          const totalDuration = (Date.now() - startTime) * 1_000_000;
          const final = JSON.stringify({
            model,
            created_at: new Date().toISOString(),
            message: { role: "assistant", content: "" },
            done: true,
            total_duration: totalDuration,
            eval_count: tokenCount,
          });
          await s.write(final + "\n");
        } finally {
          release();
        }
      });
    }

    // Non-streaming
    const signal = c.req.raw.signal;
    const startTime = Date.now();
    let fullContent = "";
    let tokenCount = 0;

    try {
      for await (const token of llm.generate(messages, params)) {
        if (signal.aborted) break;
        fullContent += token;
        if (containsStopSequence(fullContent)) {
          fullContent = trimAtStopSequence(fullContent);
          break;
        }
        tokenCount++;
      }
    } finally {
      release();
    }

    const totalDuration = (Date.now() - startTime) * 1_000_000;
    return c.json({
      model,
      created_at: new Date().toISOString(),
      message: { role: "assistant", content: fullContent },
      done: true,
      total_duration: totalDuration,
      eval_count: tokenCount,
    });
  });

  // POST /api/generate
  app.post("/api/generate", async (c) => {
    let body: GenerateRequest;
    try {
      body = await c.req.json();
    } catch {
      return c.json({ error: "invalid JSON body" }, 400);
    }
    if (typeof body.prompt !== "string" || body.prompt.length === 0) {
      return c.json({ error: "prompt must be a non-empty string" }, 400);
    }
    if (body.system !== undefined && typeof body.system !== "string") {
      return c.json({ error: "system must be a string" }, 400);
    }

    const messages: Message[] = [];
    const systemContent =
      body.system !== undefined
        ? sanitizeContent(body.system)
        : config.systemPrompt;
    if (systemContent) {
      messages.push({ role: "system", content: systemContent });
    }
    messages.push({ role: "user", content: sanitizeContent(body.prompt) });
    const params = mapOptions(body.options);
    const model = config.modelDisplayName;
    const shouldStream = body.stream !== false;

    const release = await acquireOrBusy();
    if (!release) {
      return c.json({ error: "server busy, try again later" }, 503);
    }

    if (shouldStream) {
      return stream(c, async (s) => {
        c.header("Content-Type", "application/x-ndjson");

        const startTime = Date.now();
        let tokenCount = 0;
        let aborted = false;

        s.onAbort(() => {
          aborted = true;
        });

        try {
          let buffer = "";
          for await (const token of llm.generate(messages, params)) {
            if (aborted) break;
            buffer += token;
            if (containsStopSequence(buffer)) break;
            tokenCount++;
            const chunk = JSON.stringify({
              model,
              created_at: new Date().toISOString(),
              response: token,
              done: false,
            });
            await s.write(chunk + "\n");
          }

          const totalDuration = (Date.now() - startTime) * 1_000_000;
          const final = JSON.stringify({
            model,
            created_at: new Date().toISOString(),
            response: "",
            done: true,
            total_duration: totalDuration,
            eval_count: tokenCount,
          });
          await s.write(final + "\n");
        } finally {
          release();
        }
      });
    }

    // Non-streaming
    const signal = c.req.raw.signal;
    const startTime = Date.now();
    let fullResponse = "";
    let tokenCount = 0;

    try {
      for await (const token of llm.generate(messages, params)) {
        if (signal.aborted) break;
        fullResponse += token;
        if (containsStopSequence(fullResponse)) {
          fullResponse = trimAtStopSequence(fullResponse);
          break;
        }
        tokenCount++;
      }
    } finally {
      release();
    }

    const totalDuration = (Date.now() - startTime) * 1_000_000;
    return c.json({
      model,
      created_at: new Date().toISOString(),
      response: fullResponse,
      done: true,
      total_duration: totalDuration,
      eval_count: tokenCount,
    });
  });

  // GET /api/tags
  app.get("/api/tags", (c) => {
    return c.json({
      models: [
        {
          name: config.modelDisplayName,
          model: config.modelDisplayName,
          modified_at: new Date().toISOString(),
          size: 0,
          digest: "",
          details: {
            parent_model: "",
            format: "hef",
            family: "qwen2",
            families: ["qwen2"],
            parameter_size: "1.5B",
            quantization_level: "",
          },
        },
      ],
    });
  });

  // GET /api/version
  app.get("/api/version", (c) => {
    return c.json({ version: "0.1.0" });
  });

  // POST /api/show
  app.post("/api/show", async (c) => {
    const body = await c.req.json().catch(() => ({}));
    const name =
      typeof body.name === "string"
        ? body.name
        : typeof body.model === "string"
          ? body.model
          : config.modelDisplayName;
    return c.json({
      name,
      model: name,
      modelfile: "",
      parameters: "",
      template: llm.getPromptTemplate(),
      details: {
        parent_model: "",
        format: "hef",
        family: "qwen2",
        families: ["qwen2"],
        parameter_size: "1.5B",
        quantization_level: "",
      },
      model_info: {
        "general.architecture": "qwen2",
        "general.parameter_count": 1_500_000_000,
      },
    });
  });

  return app;
}
