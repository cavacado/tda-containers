FROM golang:1.25-bookworm AS builder

WORKDIR /usr/src/app

COPY go.* .
COPY main.go .

RUN go get && go build -o main main.go

FROM debian:bookworm AS runner

WORKDIR /usr/src/app

COPY --from=builder /usr/src/app/main .
COPY public public
COPY templates templates

ENTRYPOINT ["./main"]
CMD ["--port", "8080", "--name", "default_name", "--hash", "1234567890"]

