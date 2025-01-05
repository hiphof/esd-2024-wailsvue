<script setup lang="ts">
import TaskWrapper from "../components/TaskWrapper.vue"
import Task1 from "../tasks/task-1/Task1.vue"
</script>

<template>
	<TaskWrapper>
		<template #header>
			<h1>Task 1: Vue Reactivity Basics - Ref for Primitives</h1>
			<p>
				Oh no the counter does not work! Your task is to repair it using the 'ref' attribute to make the number reactive.
			</p>
		</template>
		<template #default>
			<Task1 />
		</template>
	</TaskWrapper>
</template>
