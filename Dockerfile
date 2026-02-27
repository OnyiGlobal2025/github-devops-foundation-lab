# -------- Build Stage --------
FROM node:18-alpine3.20 AS builder

WORKDIR /app

COPY package*.json ./
RUN npm ci

COPY . .

# -------- Production Stage --------
FROM node:18-alpine3.20

RUN apk update && apk upgrade

WORKDIR /app

COPY package*.json ./
RUN npm ci --omit=dev

COPY --from=builder /app/server.js ./server.js

EXPOSE 3000

CMD ["node", "server.js"]