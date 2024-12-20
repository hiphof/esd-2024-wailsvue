<script setup lang="ts">
const model = defineModel()

function setText() {
	model.value = "Example Text"
}
</script>

<template>
	<div style="border: 1px solid #ccc; padding: 1em; margin: 1em;">
		<input v-model="model" type="search" placeholder="poiwet" />
		<button @click="setText">Set Text</button>
	</div>
</template>
