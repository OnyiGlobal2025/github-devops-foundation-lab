# Use official Node image
FROM node:18-alpine3.20

RUN apk update && apk upgrade

# Set working directory
WORKDIR /app

# Copy package files first (for better caching)
COPY app/package*.json ./

# Install dependencies
RUN npm ci --only=production

# Copy app source code
COPY app/ .

# Expose port
EXPOSE 3000

# Start the app
CMD ["node", "server.js"]