[Jump to Task Overview](../../../../README.md)

# Task 10: Complex Event Handling

Welcome to Task 10, where we have a look into some important Wails runtime methods.

Event handling can be used to not only send messages from the front to the back-end, but also the other way around, which is really useful.

[Go to Task 10 (Go)](../../../../backend/app.go)  
[Go to Task 10 (Vue)](Task10.vue)

### TODO 10.1: create a function "eventLoop", where you emit the "message" event based on a timer (Ticker)

After creating the basic function signature, you should create multiple "tickers", which can be instantiated with `time.NewTicker(N * time.Second)` where `N` is the number of seconds.

> 💡 **Tip:** In Go, we instantiate a variable like this: `varName := value`

The next thing we need is a for loop, more specifically a "for-ever" loop.

> 💡 **Tip:** A for-ever loop is missing the conditional: `for { /* code */ }`

Now we are getting into the more complex territory of Go: handling signals.
With the `select` statement, you will face a familiar syntax that is closely related to a switch case statment.
However, this statement can wait for channels (in our case the tickers) and it will execute the next case where a signal is received. This procedure is thread safe.

```go
select {
case <-someTicker.C:
    // your code
case <-anotherTicker.C:
    // your code
}
```

The last thing you need in the Go section is the event emitting.

> 📝 **Note:** The Wails runtime methods are always found in the `runtime` package and receive the app context as first parameter.

To emit an event from the backend, you can call `runtime.EventsEmit(a.ctx, "eventName", "eventParameter")`

### TODO 10.2: call your eventLoop function asynchronously

Simply uncomment the code.


### TODO 10.3: add computed property to get the last 5 messages in reverse order

This task is over in the Vue code again.

[Go to Task 10 (Vue)](Task10.vue)

Just like in previous tasks, add a computed property.
You can use `.slice(-5)` on a list to get the last 5 entries.

> 📝 **Note:** Using `.toReversed()` will show the newest message at the top

### TODO 10.4: use the Wails runtime method "EventsOn" to bind "onMessage" to the "message" event

The runtime method required here is already imported in the Vue file, you have to pass it an event name and a function as callback.

### TODO 10.5: use the Wails runtime method "EventsOff" to unbind from the "message" event

This is similar to the previous one, but we only pass the event name.

### TODO 10.6: iterate over your computed property

Replace the empty array here with your computed property.

Et voilà! You are done with ALL OF IT.
There are no more tasks. You've really done it.
Congratulations! 🎉
