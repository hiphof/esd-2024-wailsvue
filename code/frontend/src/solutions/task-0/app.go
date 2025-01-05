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
}

func (a *App) Greet() string {
	return "Hello from Go!"
}

// TODO 0.1:
// create a function "Multiply" that receives two numbers and multiplies them together
// take a look at the two functions above to get an idea about the signature
// you can use int/int64 or float64, if you want to support decimals
func (a *App) Multiply(num1 float64, num2 float64) float64 {
	return num1 * num2
}
