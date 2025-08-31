# Small, fast base image
FROM node:20-alpine

ENV NODE_ENV=production
WORKDIR /app

# Install only prod deps
COPY package.json package-lock.json* ./
RUN npm ci --omit=dev

# Copy source
COPY app.js .

# Run app
EXPOSE 3000
CMD ["node", "app.js"]