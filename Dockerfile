FROM golang:1.23 AS builder

RUN apt-get update && apt-get install -y --no-install-recommends \
    git \
    bash \
    build-essential \
    gcc \
    npm \
    nodejs \
    libgtk-3-dev \
    libwebkit2gtk-4.0-dev \
    xvfb

ENV DISPLAY=:99

WORKDIR /app

# install Wails CLI
RUN go install github.com/wailsapp/wails/v2/cmd/wails@v2.9.2

CMD ["bash", "-c", "Xvfb :99 -screen 0 1024x768x16 & bash"]
