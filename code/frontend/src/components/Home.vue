<script lang="ts" setup>

import { Greet } from "../../wailsjs/go/main/App"
import { ref } from "vue"

const greet = ref("")

async function onClick() {
	greet.value = await Greet()
}
</script>

<template>
	<div>
		<h1>Home</h1>
		<p>Welcome to our Wails x Vue.js Workshop!</p>
		<button @click="onClick">Click me!</button>
		<p>{{greet}}</p>
	</div>
</template>
