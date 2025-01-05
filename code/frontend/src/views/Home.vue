<script setup lang="ts">
import { Greet } from "../../wailsjs/go/backend/App"
import { onMounted, ref } from "vue"
import VueLogo from "../assets/images/vuejs_logo.png"
import WailsLogo from "../assets/images/wails_logo.png"
import DancingGopher from "../assets/images/dancing_gopher.gif"

const greet = ref("")

onMounted(async () => {
	greet.value = await Greet()
})
</script>

<template>
	<div class="wrapper">
		<div class="container">
			<div class="logo-container">
				<a href="https://vuejs.org/" target="_blank" rel="noopener noreferrer">
					<img :src="VueLogo" class="vue logo" alt="Vue.js Logo">
				</a>
				<p>X</p>
				<a href="https://wails.io/" target="_blank" rel="noopener noreferrer">
					<img :src="WailsLogo" class="wails logo" alt="Wails Logo">
				</a>
			</div>
			<h1>Welcome to our Workshop!</h1>
			<p>We hope you will have some fun, bringing Web Technology to the Desktop ✨</p>
			<p class="greet" v-if="greet !== ''">
				{{ greet }}
				<a href="https://go.dev/" target="_blank" rel="noopener noreferrer">
					<img :src="DancingGopher" class="go logo" alt="Dancing Go Mascot">
				</a>
			</p>
		</div>
	</div>
</template>

<style scoped>
.container {
	display: flex;
	flex-direction: column;
	align-items: center;
	padding: 2rem;
}

.wrapper {
	display: grid;
	place-items: center;
	height: 100%;
}

.logo-container {
	display: flex;
	align-items: center;
	justify-content: center;
	gap: 1rem;
	font-size: x-large;
	user-select: none;
}

p {
	font-size: larger;
}

.greet {
	display: flex;
	align-items: center;
	gap: 1rem;
}

.logo {
	transition: filter 0.5s ease-out;
}

.vue {
	height: 6rem;
}

.vue:hover {
	filter: drop-shadow(0 0 2rem #3fb98477);
}

.wails {
	height: 8.5rem;
}

.wails:hover {
	filter: drop-shadow(0 0 2rem #e3323277);
}

.go {
	height: 4rem;
}

.go:hover {
	filter: drop-shadow(0 0 2rem #96d6ff77);
}
</style>
