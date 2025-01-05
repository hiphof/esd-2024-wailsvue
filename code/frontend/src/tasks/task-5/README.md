[Jump to Task Overview](../../../../README.md)

# Task 5: Lifecycle Hooks

In this Task we will take a look at 'Lifecycle Hooks'. They can be used to run code after the initial rendering.
Most commonly used are the following: `onMounted`, `onUnmounted`, `onUpdated`.

Lifecycle hooks give users the opportunity to run their own code at specific stages.

We will play around with them on the example of a weather fetching api.

[Go to Task 5](Task5.vue)

### TODO 5.1: register a callback to be called after the component has been mounted
Call functions to fetch weather data and start a refresh timer for automatic fetching in `onMounted()`.

### TODO 5.2: register a callback to be called after the component has been unmounted
Call the function to clear the interval previously set in the `startRefreshTimer` function in `onUnmounted()`.

> 📝 **Note:** `onUpdated` registers a callback to be called after the component has updated its DOM due to a reactive state change.