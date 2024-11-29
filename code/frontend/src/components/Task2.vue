<script lang="ts" setup>
import { ref, onMounted } from 'vue';

const weatherData = ref<any>();
const loading = ref(true);
const error = ref<String>();

onMounted(async () => {
    try {
        const response = await fetch(
            'https://api.open-meteo.com/v1/forecast?latitude=51.37&longitude=6.17&current_weather=true'
        );
        const data = await response.json();
        weatherData.value = {
            temperature: data.current_weather.temperature,
            windSpeed: data.current_weather.windspeed,
        };
    } catch (err) {
        error.value = 'Failed to load data.';
    } finally {
        loading.value = false;
    }
});
</script>

<template>
    <div>
        <h1>Task 2: Fetch Weather Data</h1>
        <p v-if="loading">Loading...</p>
        <p v-else-if="error">Error: {{ error }}</p>
        <div v-else>
            <p>Temperature: {{ weatherData.temperature }}°C</p>
            <p>Wind Speed: {{ weatherData.windSpeed }} km/h</p>
        </div>
    </div>
</template>