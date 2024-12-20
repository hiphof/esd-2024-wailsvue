<script setup lang="ts">
import { ref } from "vue"
import Task99Input from "./Task99Input.vue"

const name = ref("")
</script>

<template>
	<p>Enter your name:</p>
	<Task99Input v-model="name" />
	<p>Hello, {{ name }}!</p>
</template>

<style scoped>

</style>
