<script setup lang="ts">
import { ref } from "vue"
/* TODO: 0.2: comment in this import when you completed the function in app.go */
//import { Multiply } from "../../../wailsjs/go/backend/App"

const product = ref(0)

async function onClick() {
	/* TODO: 0.3: use the commented out code to call your function */
	product.value = 0 // await Multiply(3, 6)
}
</script>

<template>
	<h2>Product: {{ product }}</h2>
	<button @click="onClick">Calculate</button>
</template>
