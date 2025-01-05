<script setup lang="ts">
/*
	TODO 9.2:
	create a model variable that acts as our binding, using "defineModel()"
	in our case, we don't want multiple models so it can stay unnamed
*/
const model = defineModel()

const randomQuotes = [
	"Arrow to the knee.",
	"Curved. Swords.",
	"Sweetroll stolen, huh?",
	"For Skyrim!",
	"What is it?",
	"Stay sharp.",
	"By the Nine!",
	"Need something?",
	"Good day.",
	"Mind yourself.",
]

function setRandomQuote() {
	/* TODO 9.3: just like a ref, we need to manipulate the underlying value with ".value" */
	model.value = randomQuotes[Math.floor(Math.random() * randomQuotes.length)]
}
</script>

<template>
	<div class="container">
		<!-- TODO 9.4: we are using the native input element here, so we need to pass our own model to it using "v-model" again -->
		<input v-model="model" type="search" placeholder="Don't quote me on that!" />

		<button @click="setRandomQuote">Set Random Quote</button>
	</div>
</template>

<style scoped>
.container {
	display: flex;
	justify-content: center;
	gap: 1rem;
	border: 2px solid #ccc;
	border-radius: 0.5rem;
	padding: 1rem;
	margin: 1rem;
	background: #ccc2;
}

input {
	padding: 0.5rem 0.75rem;
	border-radius: 0.25rem;
	border: none;
}
</style>
