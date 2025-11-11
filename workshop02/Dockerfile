FROM node:24-trixie AS builder

# Set the working directory inside the container and cd into it
WORKDIR /usr/src/app

COPY package*.json ./
COPY public public
COPY src src
COPY tsconfig.* ./
COPY angular.json ./

RUN npm ci
RUN npx ng build

FROM caddy:alpine AS runner

# Set the working directory inside the container and cd into it
WORKDIR /usr/src/app/html

COPY --from=builder /usr/src/app/dist/angular/browser ./html
COPY caddy/error.html ./html/error.html
COPY caddy/Caddyfile /etc/caddy/Caddyfile

ENV CADDY_PORT=3000

EXPOSE ${CADDY_PORT}

CMD ["caddy", "run", "--config", "/etc/caddy/Caddyfile"]



