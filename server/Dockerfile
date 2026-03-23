FROM node:20-alpine

# Set working directory
WORKDIR /app

# Copy package.json and install dependencies
COPY package*.json ./
RUN npm ci --only=production

# Copy application code
COPY . .

# Expose the API port
EXPOSE 5000

# Start the Node.js server
CMD ["npm", "start"]
