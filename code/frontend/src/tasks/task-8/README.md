[Jump to Task Overview](../../../../README.md)

# Task 8: Custom Components

Welcome to Task 8! Here we will see how to build and integrate our own custom component!

[Go to Task 8](Task8.vue)

### TODO 8.1: replace this p-tag with the custom component and pass some properties to it

Replace the whole paragraph with your custom component and pass some properties to it.
The name of the component is `CustomComponent.vue`and is imported as `CustomComponent`.  

> 💡 **Tip:** Use `title` and `content` as properties you pass.

[Go to the custom component](CustomComponent.vue)  

### TODO: 8.2 pass properties to this component

In your [custom component](CustomComponent.vue) use `defineProps()` to define properties which you want to pass to the component.

If you need help maybe this Link will help you:   
<https://vuejs.org/guide/components/props>

### TODO 8.3: use the props you defined above here

Use the properties you defined in TODO 8.2! Just put them into the `<h2>` for the title and `<p>` for the content.

> 📝 **Note:** If you did not pass `title` and `content`, you will just have to change the `<h2>` and `<p>` stuff with your properties.