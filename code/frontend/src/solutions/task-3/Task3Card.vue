<script setup lang="ts">
const props = defineProps({ title: { type: String, required: true, }, content: { type: String, required: true, } })
</script>

<template>
	<div style="border: 1px solid #ccc; padding: 1em; margin: 1em;">
		<h2>{{ title }}</h2>
		<p>{{ content }}</p>
	</div>
</template>
