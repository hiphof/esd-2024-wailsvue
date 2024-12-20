<script setup lang="ts">
import TaskWrapper from "../components/TaskWrapper.vue"
import Task1 from "../tasks/task-1/Task1.vue"
</script>

<template>
	<TaskWrapper>
		<template #header>
			<h1>Task 1: Vue Reactivity Basics - Ref for Primitives</h1>
			<p>
				hello welcome to task 1 you are well on your way to becoming an osu! rhythm champion
			</p>
		</template>
		<template #default>
			<Task1 />
		</template>
	</TaskWrapper>
</template>
