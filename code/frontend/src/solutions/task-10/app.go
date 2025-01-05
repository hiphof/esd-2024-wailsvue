package backend

import (
	"context"
	"github.com/wailsapp/wails/v2/pkg/runtime"
	"time"
)

type App struct {
	ctx context.Context
}

func NewApp() *App {
	return &App{}
}

// NOTE:
// Startup is called when the app starts. The context is saved
// so we can call the runtime methods
func (a *App) Startup(ctx context.Context) {
	a.ctx = ctx
	// TODO 10.2: call your eventLoop function asynchronously
	go a.eventLoop()
}

// TODO 10.1:
// create a function "eventLoop", where you emit the "message" event based on a timer (Ticker)
func (a *App) eventLoop() {
	ticker3sec := time.NewTicker(3 * time.Second)
	ticker5sec := time.NewTicker(5 * time.Second)

	for {
		select {
		case <-ticker3sec.C:
			runtime.EventsEmit(a.ctx, "message", "Hello from 3s Ticker")
		case <-ticker5sec.C:
			runtime.EventsEmit(a.ctx, "message", "Hello from 5s Ticker")
		}
	}
}

func (a *App) Greet() string {
	return "Hello from Go!"
}
