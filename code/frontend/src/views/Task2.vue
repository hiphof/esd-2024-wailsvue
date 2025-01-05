<script setup lang="ts">
import TaskWrapper from "../components/TaskWrapper.vue"
import Task2 from "../tasks/task-2/Task2.vue"
</script>

<template>
	<TaskWrapper>
		<template #header>
			<h1>Task 2: Vue Reactivity Basics - Reactive Objects</h1>
			<p>
				Alright, in this task we use 'reactive' instead of 'ref'. Make the re-rolling of stats possible!
			</p>
		</template>
		<template #default>
			<Task2 />
		</template>
	</TaskWrapper>
</template>
