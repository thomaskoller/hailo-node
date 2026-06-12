export interface ServerConfig {
  serverPort: number;
  serverHost: string;
  systemPrompt: string;
  language: string;
  modelDisplayName: string;
  llmHostname: string;
  llmPort: number;
  hefPath: string;
  /** If non-empty, /api/* requires `Authorization: Bearer <apiKey>` */
  apiKey: string;
  /** Maximum requests allowed to wait for the device mutex */
  maxQueuedRequests: number;
}

function parsePort(value: string | undefined, fallback: number): number {
  const port = parseInt(value ?? "", 10);
  return Number.isInteger(port) && port > 0 && port <= 65535 ? port : fallback;
}

export function loadConfig(): ServerConfig {
  const hefLibraryPath =
    process.env.HEF_LIBRARY_PATH ??
    "/usr/local/hailo/resources/models/hailo10h/";
  const hefDefaultModel =
    process.env.HEF_DEFAULT_MODEL ?? "Qwen2.5-1.5B-Instruct.hef";

  return {
    serverPort: parsePort(process.env.SERVER_PORT, 11434),
    serverHost: process.env.SERVER_HOST ?? "0.0.0.0",
    systemPrompt:
      process.env.SYSTEM_PROMPT ??
      "You are a helpful assistant. Always respond in English.",
    language: process.env.LANGUAGE ?? "en",
    modelDisplayName: process.env.MODEL_DISPLAY_NAME ?? "qwen2.5:1.5b",
    llmHostname: process.env.LLM_HOSTNAME ?? "localhost",
    llmPort: parsePort(process.env.LLM_PORT_NUMBER, 12145),
    hefPath: `${hefLibraryPath}${hefDefaultModel}`,
    apiKey: process.env.API_KEY ?? "",
    maxQueuedRequests: parseInt(process.env.MAX_QUEUED_REQUESTS ?? "32", 10),
  };
}
