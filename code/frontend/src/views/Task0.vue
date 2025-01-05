<script setup lang="ts">
import TaskWrapper from "../components/TaskWrapper.vue"
import Task0 from "../tasks/task-0/Task0.vue"
</script>

<template>
	<TaskWrapper>
		<template #header>
			<h1>Task 0: The Wails Philosophy</h1>
			<p>
				Welcome to the first task of the workshop!
			</p>
			<p>
				All tasks in this workshop are in a non-functional state and need to be repaired by you! Please
				feel free to follow the readme's that accompany each task under 'frontend/src/tasks' so you don't get lost. 
				Further help could be the references in the main readme you already know under '/code' 
				or just in your root when you check your project while it is running in docker!
			</p>
			<p>
				There is also solutions under 'frontend/src/solutions' in case you are a cheater (or need help).
			</p>
			<p>
				For this first task, we look at the Wails philosophy! You will write a multiply function in Go and use it in Vue
				to get the 'calculator' to work.
			</p>
		</template>
		<template #default>
			<Task0 />
		</template>
	</TaskWrapper>
</template>
