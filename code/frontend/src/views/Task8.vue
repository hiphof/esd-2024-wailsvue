<script setup lang="ts">
import TaskWrapper from "../components/TaskWrapper.vue"
import Task8 from "../tasks/task-8/Task8.vue"
</script>

<template>
	<TaskWrapper>
		<template #header>
			<h1>Task 8: Custom Component</h1>
			<p>
				Let's go and build our own first custom component.
			</p>
			<p>
				Your task is to replace the paragraph with your own component.
			</p>
		</template>
		<template #default>
			<Task8 />
		</template>
	</TaskWrapper>
</template>
