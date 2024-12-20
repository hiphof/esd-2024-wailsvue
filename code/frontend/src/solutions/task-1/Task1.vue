<script setup lang="ts">
import { reactive, ref } from "vue"

const message = ref("Hello, Vue.js!")
const state = reactive({ counter: 0 })

const incrementCounter = () => {
	state.counter++
}
</script>

<template>
	<p>Message: {{ message }}</p>
	<p>Counter: {{ state.counter }}</p>
	<button @click="incrementCounter">Increment Counter</button>
</template>

<style scoped>

</style>
