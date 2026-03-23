# ---- Stage 1: Build the React Application ----
FROM node:20-alpine AS build

WORKDIR /app

# Copy dependencies manifest and install
COPY package*.json ./
RUN npm ci

# Copy the source code and build
COPY . .
RUN npm run build

# ---- Stage 2: Serve the App using Nginx ----
FROM nginx:alpine

# Copy the custom Nginx config for React Router support
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Copy compiled build to Nginx serving directory
COPY --from=build /app/dist /usr/share/nginx/html

# Expose HTTP port
EXPOSE 80

# Start Nginx
CMD ["nginx", "-g", "daemon off;"]
