<script setup lang="ts">
import { ref } from "vue"

const status = ref("")
</script>

<template>
	<!--
		TODO 4.1:
		insert the conditional directives to display only the correct status

		this might feel weird, since we are used to wrapping code with if statements, but just trust the process!

		the directives are:
		v-if
		v-else-if
		v-else
	-->
	<p>✅ Yippie!</p>
	<p>❌ Oh Noes!</p>
	<p>⚠️ No Status</p>

	<div class="controls">
		<button @click="status = 'success'">Set Success</button>
		<button @click="status = 'error'">Set Error</button>
		<button @click="status = ''">Clear Status</button>
	</div>
</template>

<style scoped>
.controls {
	display: flex;
	gap: 1rem;
	justify-content: center;
}
</style>
