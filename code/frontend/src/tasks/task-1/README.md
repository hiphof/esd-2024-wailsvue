[Jump to Task Overview](../../../../README.md)

# Task 1: Vue Reactivity Basics - Ref for Primitives

In this first task we learn what the 'ref' attribute is used for. We use it to create a single reactive variable.

[Go to Task 1](Task1.vue)

### TODO 1.1: add a counter 'state' by using Vue's ref
When initializing a ref, you can use any JavaScript primitive - String, Number, Object etc.

`const counter = ref(0);`

When the counter changes in JavaScript the component will re-render since it is reactive.

### TODO 1.2: add a function which increments the counter
Write a function that increments the counter by one on when called. 

> ⚠️ **Important:** Please note that ref returns an Object, so you have to increment the value!

### TODO 1.3: display the counter
Display the counter in a `<p>` tag and call it a day.

> 💡 **Tip:** Since you are now in template you do not have to use `counter.value` here. It is already implied - you can just use `counter`.

### TODO 1.4 add click listener to call your function
A small sneak peak to a future task - directives.

We need to call the incrementing function you built in Task 1.2 to be called on button click. Vue has a directive `v-on:click` for the event handling here. We can shorten the `v-on` to `@`. So we can now add that to the `<button>` in the form of `@click=""`! Put your funtion name in the quotes and you are good to go.

> 📝 **Note:** Check out the styling note below in the Task1.vue for an extra insight.

