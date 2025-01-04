# README

## Welcome

As soon as your dev container is finished installing, it automatically executes `wails dev` for you. This will boot up wails for the first time, initializing the Vue frontend as well as building the Go backend.

If you see output similar to the following:

```cmd
Watching (sub)/directory: /app

To develop in the browser and call your bound Go methods from Javascript, navigate to: http://localhost:34115
```

This indicates that the startup process has finished.  
You can CTRL/CMD + click the link in the terminal to visit the Wails frontend in your browser!  
You can also click [here](http://localhost:34115)

## Project Structure

The project structure might seem a little overwhelming at first, but we are mainly focusing on two locations:

`/backend/app.go`  
This is the core of our Wails applications backend, where we can write Go code which has regular system access just like any other desktop application.

`/frontend/src/tasks/*`  
Here we can find all the practical tasks for this workshop. These are isolated Vue components where we will explore some entry level features of Vue.

`/frontend/src/solutions/*`  
If you get stuck or just want to quickly peek into how we intended a task to be solved, feel free to cheat!

## Task Overview

[Task 1: Reactivity Basics - Ref for Primitives](./frontend/src/tasks/task-1/README.md)  
[Task 2: Reactivity Basics - Reactive Objects](./frontend/src/tasks/task-2/README.md)  
[Task 3: Computed Property](./frontend/src/tasks/task-3/README.md)  
[Task 4: Conditional Rendering](frontend/src/tasks/task-4/README.md)  
[Task 5: Lifecycle Hooks](frontend/src/tasks/task-5/README.md)  
[Task 98](frontend/src/tasks/task-98/README.md)  
[Task 99](frontend/src/tasks/task-99/README.md)  
