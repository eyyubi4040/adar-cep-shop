# ==========================================
# Adar Cep Shop Kırşehir - Dokploy Uyumlu Dockerfile
# ==========================================

# 1. Derleme Aşaması (Vite + Tailwind + TypeScript)
FROM oven/bun:1 AS builder

WORKDIR /app

# Bağımlılık dosyalarını kopyala ve kur
COPY package.json bun.lock* ./
RUN bun install --frozen-lockfile || bun install

# Kaynak kodları kopyala ve projeyi derle
COPY . .
RUN bun run build

# 2. Üretim Çalışma Aşaması (Hafif ve Hızlı Bun İmajı)
FROM oven/bun:1 AS runner

WORKDIR /app

ENV NODE_ENV=production \
    PORT=3000

# Sadece sunucu ve statik varlıkları kopyala
COPY package.json ./
COPY server.ts ./
COPY --from=builder /app/dist ./dist
COPY --from=builder /app/public ./public

EXPOSE 3000

# Sağlık kontrolü
HEALTHCHECK --interval=30s --timeout=5s --start-period=10s --retries=3 \
  CMD bun -e "fetch('http://127.0.0.1:' + (process.env.PORT || 3000) + '/').then(r => process.exit(r.ok ? 0 : 1)).catch(() => process.exit(1))"

CMD ["bun", "run", "server.ts"]
