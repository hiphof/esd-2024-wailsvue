<script setup lang="ts">
import TaskWrapper from "./TaskWrapper.vue"
import { ref } from "vue"
import Task4Input from "./Task4Input.vue"

const name = ref("")
</script>

<template>
	<TaskWrapper>
		<template #header>
			<h1>Task 4: Two-Way Data Binding</h1>
			<p>
				hello welcome to task 4 you are well on your way to becoming an osu! rhythm champion
			</p>
		</template>
		<template #default>
			<p>Enter your name:</p>
			<Task4Input v-model="name" />
			<p>Hello, {{ name }}!</p>
		</template>
	</TaskWrapper>
</template>
