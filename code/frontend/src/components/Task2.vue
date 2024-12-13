<script lang="ts" setup>
import TaskWrapper from "./TaskWrapper.vue"
import { onMounted, onUnmounted, ref } from "vue"

const weatherData = ref<any>()
const loading = ref(true)
const error = ref<string | null>(null)
const refreshCounter = ref(10)
let refreshInterval: number

const fetchWeatherData = async () => {
	loading.value = true
	error.value = null
	try {
		const response = await fetch(
			"https://api.open-meteo.com/v1/forecast?latitude=51.37&longitude=6.17&current_weather=true"
		)
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

onMounted(() => {
	fetchWeatherData()
	startRefreshTimer()
})

onUnmounted(() => {
	clearInterval(refreshInterval)
})
</script>

<template>
	<TaskWrapper>
		<template #header>
			<h1>Task 2: Fetch Weather Data</h1>
			<p>
				hello welcome to task 2 you are well on your way to becoming an osu! rhythm champion
			</p>
		</template>
		<template #default>
			<p v-if="loading">Loading...</p>
			<p v-else-if="error">Error: {{ error }}</p>
			<div v-else>
				<p>Temperature: {{ weatherData.temperature }}°C</p>
				<p>Wind Speed: {{ weatherData.windSpeed }} km/h</p>
			</div>
			<p>Next update in: {{ refreshCounter }} seconds</p>
			<button @click="manualRefresh">Refresh Now</button>
		</template>
	</TaskWrapper>
</template>
