# Step 1: Build the React application
# Use a Node image to build the app
FROM node:20.17.0-alpine as build

ARG VITE_BASE_URL

ENV VITE_BASE_URL=${VITE_BASE_URL}

# Set the working directory in the Docker image
WORKDIR /app

# Copy the package.json and package-lock.json (if available)
COPY package*.json ./

# Install the dependencies
RUN yarn install
# Copy the rest of your app's source code from your host to your image filesystem.
COPY . .

# Build the application
RUN yarn build

# Step 2: Serve the app with Nginx
# Use an Nginx image to serve the built app
FROM nginx:alpine

# Copy the built app from the previous stage
COPY --from=build /app/dist /usr/share/nginx/html

# Copy your custom nginx configuration (if you have one)
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Expose port 80
EXPOSE 80

# Start Nginx and keep it running
CMD ["nginx", "-g", "daemon off;"]
