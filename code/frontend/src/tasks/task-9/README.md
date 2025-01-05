[Jump to Task Overview](../../../../README.md)

# Task 9: Two-Way Data Binding

Welcome to Task 9, where we will learn about how to do 'Two-Way Data Bindings'!  

Two-way data bindings make it possible for us to make views update automatically when data is programatically updated. Furthermore, when the user updates the view the data is also automatically updated.

In Vue we use `v-model` for that.

[Go to Task 9](Task9.vue)

### TODO 9.1: using the "v-model" directive, create a two-way data binding property that is update inside the child component  

[Go to QuoteMachine](QuoteMachine.vue)

In the `<QuoteMachine>` create your two-way data binding property.

> 📝 **Note:** The variable which holds our quote is called `quote`.

### TODO 9.2: create a model variable that acts as our binding, using "defineModel()"

Pretty simple. Define a model variable by using `defineModel()`.

### TODO 9.3: just like a ref, we need to manipulate the underlying value with ".value"

To get a random quote for your `model` variable we now need to use `.value`.

### TODO 9.4: we are using the native input element here, so we need to pass our own model to it using "v-model" again

Just pass your model using `v-model` in the `<input>`.   

That`s already it! Good job.
