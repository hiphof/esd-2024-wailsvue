<script setup lang="ts">
import { ref } from "vue"

/* TODO 1.1: add a counter 'state' by using Vue's ref */
const counter = ref(0)

/* TODO 1.2: add a function which increments the counter */
function incrementCounter() {
	counter.value++
}
</script>

<template>
	<!-- TODO 1.3: display the counter -->
	<p>Counter: {{ counter }}</p>

	<!-- TODO 1.4: add click listener to call your function -->
	<button @click="incrementCounter">Increment Counter</button>
</template>

<style scoped>
/* NOTE:
	scoped styling means that
	all of the following ONLY applies to this component
*/
p {
	font-size: x-large;
}

button {
	font-size: large;
	background-color: hsl(168, 76%, 42%);
	border: none;
	padding: 1rem;
	border-radius: 0.25rem;
	transition: all 0.1s ease-out;
	cursor: pointer;
	user-select: none;
}

button:hover {
	background-color: hsl(168, 76%, 47%);
	box-shadow: hsl(168, 76%, 47%, 0.366) 0 0 1rem;
}

button:active {
	background-color: hsl(168, 76%, 37%);
	transform: scale(0.95);
}
</style>
