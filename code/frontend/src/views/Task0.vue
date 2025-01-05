<script setup lang="ts">
import TaskWrapper from "../components/TaskWrapper.vue"
import Task0 from "../tasks/task-0/Task0.vue"
</script>

<template>
	<TaskWrapper>
		<template #header>
			<h1>Task 0: The Wails Philosophy</h1>
			<p>
				hello welcome to task 0 you are well on your way to becoming an osu! rhythm champion
			</p>
		</template>
		<template #default>
			<Task0 />
		</template>
	</TaskWrapper>
</template>
