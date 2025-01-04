[Jump to Task Overview](../../../../README.md)

# Task 4: Conditional Rendering

That's it, you are well on your way to become a Vue coding champion!

In Vue we can use directives to create HTML elements depending on conditions.
For conditional rendering we use `v-if`, `v-else-if`, `v-else` in Vue.

[Go to Task 4](Task4.vue)

### TODO 4.1: insert the conditional directives to display only the correct status
Insert the directives so that the proper status is displayed depending on the conditions.

> 💡 **Tip:** The status is set via the button. Think of each `<p>` as a conditional check.

> 📝 **Note:** There is also `v-show`, which works mostly the same but not with `v-else` and it does not support the `<template>` element. It will always be rendered and remain in the DOM but toggles the `display` CSS property! In short the difference is that `v-if` makes sure that event listeners and child components are destroyed. Nothing will be rendered until it is true for the first time. Therefore, if you want lower toggle costs but are okay with higher initial render costs, consider using `v-show`! If the condition is unlikely to change during runtime consider `v-if`.

