# --- Build stage: generate proto code and compile TypeScript ---
FROM node:22-alpine AS build
WORKDIR /app

COPY package.json package-lock.json ./
RUN npm ci

COPY tsconfig.json ./
COPY proto ./proto
COPY scripts ./scripts
COPY src ./src
RUN npm run build

# --- Runtime stage: production dependencies only ---
FROM node:22-alpine
ENV NODE_ENV=production
WORKDIR /app

COPY package.json package-lock.json ./
RUN npm ci --omit=dev && npm cache clean --force

COPY --from=build /app/dist ./dist
# The proto schema is loaded at runtime
COPY proto ./proto

USER node
EXPOSE 11434

HEALTHCHECK --interval=30s --timeout=5s --start-period=30s --retries=3 \
  CMD node -e "fetch('http://127.0.0.1:'+(process.env.SERVER_PORT||11434)+'/').then(r=>process.exit(r.ok?0:1)).catch(()=>process.exit(1))"

CMD ["node", "dist/src/main.js"]
