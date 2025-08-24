# Use the latest official Node.js image
FROM node:latest

# Set working directory inside the container
WORKDIR /usr/src/app

# Copy package files first for caching
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy application source code
COPY . .

# Expose the app's port
EXPOSE 3000

# Start the app
CMD ["node", "app.js"]