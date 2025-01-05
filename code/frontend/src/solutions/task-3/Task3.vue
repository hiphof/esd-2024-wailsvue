<script setup lang="ts">
import { ref, computed } from "vue"

const number = ref(0)

/* TODO 3.1: transform this variable into a computed property */
const squared = computed(() => Math.pow(number.value, 2))
</script>

<template>
	<p>N = {{ number }}</p>
	<p>N² = {{ squared }}</p>
	<!-- NOTE: we are not calling a function on click, we are simply using inline JavaScript -->
	<button @click="number += 1">Increment</button>
</template>

<style scoped>
p {
	font-size: x-large;
}
</style>
