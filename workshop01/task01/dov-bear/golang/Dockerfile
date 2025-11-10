FROM golang:1.25-bookworm AS builder

WORKDIR /usr/src/app

COPY go.* .
COPY main.go .

RUN go get && go build -o main main.go

FROM debian:bookworm AS runner

WORKDIR /usr/src/app

# install curl in the image
RUN apt update && apt install -y curl

COPY --from=builder /usr/src/app/main .
COPY public public
COPY templates templates

ENV PORT=3000

HEALTHCHECK --interval=30s --timeout=5s --retries=3 \
    CMD curl -s -f http://localhost:${PORT}/healthz || exit 1

ENTRYPOINT ["./main"]