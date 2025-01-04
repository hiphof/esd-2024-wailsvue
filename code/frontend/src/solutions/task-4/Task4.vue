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
	<p v-if="status === 'success'">✅ Yippie!</p>
	<p v-else-if="status === 'error'">❌ Oh Noes!</p>
	<p v-else>⚠️ No Status</p>

	<div class="controls">
		<!-- NOTE: we are not calling a function on click, we are simply using inline JavaScript -->
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
