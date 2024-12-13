<script lang="ts" setup>
import TaskWrapper from "./TaskWrapper.vue"
import { ref, reactive } from "vue"

const message = ref('Hello, Vue.js!')
const state = reactive({ counter: 0 })

const incrementCounter = () => {
    state.counter++
}
</script>

<template>
    <TaskWrapper>
        <template #header>
            <h1>Task 1: Vue Basics</h1>
            <p>
                hello welcome to task 1 you are well on your way to becoming an osu! rhythm champion
            </p>
        </template>
        <template #default>
            <p>Message: {{ message }}</p>
            <p>Counter: {{ state.counter }}</p>
            <button @click="incrementCounter">Increment Counter</button>
        </template>
    </TaskWrapper>
</template>

<style scoped>

</style>
