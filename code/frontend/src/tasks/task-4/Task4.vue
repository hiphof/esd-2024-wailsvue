<script setup lang="ts">
import { ref } from "vue"
import Task4Input from "./Task4Input.vue"

const name = ref("")
</script>

<template>
	<p>Enter your name:</p>
	<Task4Input v-model="name" />
	<p>Hello, {{ name }}!</p>
</template>

<style scoped>

</style>
