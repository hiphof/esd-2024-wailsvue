<script setup lang="ts">
/*
	TODO: 8.2:
	to pass properties to this component, you need to define the structure first by using "defineProps"

	if you don't care about typing, you could simply pass an array/list of strings (the property names)
	-> defineProps(["foo", "bar"])

	if you DO care about typing, you would pass an object with more details about each property,
	such as the type, if they are required. read more here: https://vuejs.org/api/sfc-script-setup#defineprops-defineemits
*/
const props = defineProps({
	title: {
		type: String,
		required: true,
	},
	content: {
		type: String,
		required: true,
	}
})
</script>

<template>
	<div class="box">
		<!-- TODO 8.3: use the props you defined above here -->
		<h2>{{ title }}</h2>
		<p>{{ content }}</p>
	</div>
</template>

<style scoped>
.box {
	border: 2px solid #ccc;
	border-radius: 2rem;
	padding: 1rem;
	margin: 1rem;
	background: #ccc2;
}
</style>
