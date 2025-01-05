[Jump to Task Overview](../../../../README.md)

# Task 2: Vue Reactivity Basics - Reactive Objects

Now to 'reactive', which is another method for declaring reactive data.

It is, unlike 'ref' which is initialized with primitives, initialized via objects!

[Go to Task 2](Task2.vue)

### TODO 2.1: add reactivity to the following object
Add reactivity by using `reactive()`.

> 💡 **Tip:** `reactive({})` - You can make each property reactive.

### TODO 2.2: update the function to change the player's stats
Update the function in a way that the player stats are changed on click. Change for example the strength or health value.

> 💡 **Tip:** You could use `Math.random()` to always get a different number and reroll the stats.

### Notable
You might notice that 'reactive' does not use 'value' such as 'ref'. This is an advantage. It makes it the same for the JavaScript as well as the template! 

> ❗ **Important:** Furthermore destructuring the value of a reactive does not work! See below.

```
// Wrong
let { count } = data
count++

// Right
data.count++
```
