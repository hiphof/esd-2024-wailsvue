<script setup lang="ts">
import TaskWrapper from "../components/TaskWrapper.vue"
import Task2 from "../tasks/task-2/Task2.vue"
</script>

<template>
	<TaskWrapper>
		<template #header>
			<h1>Task 2: Vue Reactivity Basics - Reactive Objects</h1>
			<p>
				hello welcome to task 2 you are well on your way to becoming an osu! rhythm champion
			</p>
		</template>
		<template #default>
			<Task2 />
		</template>
	</TaskWrapper>
</template>
