<script lang="ts" setup>
import { ref, reactive } from 'vue';
const message = ref('Hello, Vue.js!');
const state = reactive({ counter: 0 });

const incrementCounter = () => {
    state.counter++;
};
</script>

<template>
    <div>
        <h1>Task 1: Vue Basics</h1>
        <p>Message: {{ message }}</p>
        <p>Counter: {{ state.counter }}</p>
        <button @click="incrementCounter">Increment Counter</button>
    </div>
</template>
