package backend

import (
	"context"
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
	//go a.eventLoop()
}

// TODO 10.1:
// create a function "eventLoop", where you emit the "message" event based on a timer (Ticker)

func (a *App) Greet() string {
	return "Hello from Go!"
}

// TODO 0.1:
// create a function "Multiply" that receives two numbers and multiplies them together
// take a look at the two functions above to get an idea about the signature
// since we use "number" in JavaScript and TypeScript
func (a *App) Multiply(x, y int) int {
	return x * y
}
