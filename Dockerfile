# Use the official Node.js 18 image as the base image
FROM node:latest

# Set the working directory in the container to /app
WORKDIR /app

# Copy the package.json and package-lock.json files to the container
COPY package*.json ./

# Install the Gatsby CLI globally in the container
RUN npm install -g gatsby-cli

# Install the project's dependencies in the container and display the error log if it fails
RUN npm install --force


# Copy the rest of the project files to the container
COPY . .

# Set the container's command to run Gatsby's development server
CMD ["gatsby", "develop", "-H", "0.0.0.0"]
