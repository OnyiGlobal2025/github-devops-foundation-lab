# -------- Build Stage --------
FROM node:18-alpine3.20 AS builder

WORKDIR /app

COPY app/package*.json ./
RUN npm ci

COPY app .

# -------- Production Stage --------
FROM node:18-alpine3.20

RUN apk update && apk upgrade

WORKDIR /app

COPY app/package*.json ./
RUN npm ci --omit=dev

COPY app .

EXPOSE 3000

CMD ["node", "server.js"]