<script setup lang="ts">
import { onMounted, onUnmounted, ref } from "vue"

const weatherData = ref<any>()
const loading = ref(true)
const error = ref<string | null>(null)
const refreshCounter = ref(10)
let refreshInterval: number

/* NOTE: do not touch this function */
const fetchWeatherData = async () => {
	loading.value = true
	error.value = null
	try {
		const response = await fetch(
			"https://api.open-meteo.com/v1/forecast?latitude=51.37&longitude=6.17&current_weather=true"
		)
		await new Promise((resolve, _) => setTimeout(() => resolve(true), 1000))
		const data = await response.json()
		weatherData.value = {
			temperature: data.current_weather.temperature,
			windSpeed: data.current_weather.windspeed,
		}
	} catch (err) {
		error.value = "Failed to load data."
	} finally {
		loading.value = false
	}
}

/* HINT: you can change the refreshCounter.value to something smaller to fetch weather data faster for playing around */
const resetCounter = () => {
	refreshCounter.value = 10
}

const startRefreshTimer = () => {
	refreshInterval = setInterval(() => {
		refreshCounter.value--
		if (refreshCounter.value === 0) {
			resetCounter()
			fetchWeatherData()
		}
	}, 1000)
}

const manualRefresh = () => {
	resetCounter()
	fetchWeatherData()
}

/* TODO 1.1: 
	register a callback to be called after the component has been mounted
	- fetch weather data
	- start refresh timer
*/
onMounted(() => {
	fetchWeatherData()
	startRefreshTimer()
})

/* TODO 1.2:
	register a callback to be called after the component has been unmounted
	- clear the refresh interval
*/
onUnmounted(() => {
	clearInterval(refreshInterval)
})
</script>

<template>
	<p v-if="loading">Loading...</p>
	<p v-else-if="error">Error: {{ error }}</p>
	<div v-else>
		<p>Temperature: {{ weatherData.temperature }}°C</p>
		<p>Wind Speed: {{ weatherData.windSpeed }} km/h</p>
	</div>
	<p>Next update in: {{ refreshCounter }} seconds</p>
	<button @click="manualRefresh">Refresh Now</button>
</template>

<style scoped>

</style>
