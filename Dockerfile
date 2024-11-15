FROM golang:1.21-alpine AS builder

RUN apk add --no-cache \
    git \
    bash \
    build-base \
    gcc \
    musl-dev \
    npm \
    nodejs \
    pkgconfig \
    libx11-dev \
    libxcursor-dev \
    libxrandr-dev \
    libxinerama-dev \
    libxi-dev \
    mesa-dev

WORKDIR /app

# install Wails CLI
RUN go install github.com/wailsapp/wails/v2/cmd/wails@v2.9.2

CMD ["sh", "-c", "npm run dev-setup && npm run dev-exposed"]
