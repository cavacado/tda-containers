## Build the application
# Use the official Node.js image as the base image
FROM node:24-trixie

# Set the working directory inside the container and cd into it
WORKDIR /usr/src/app

# Copy files required for running the image
COPY package*.json ./
COPY main.js ./
COPY public public
COPY views views

# Install application dependencies
RUN npm ci

# explicit path instead of relative path
ENTRYPOINT ["node","/usr/src/app/main.js"]
CMD ["-p", "8080", "-n", "dov_bear", "--hash", "1234567890"]