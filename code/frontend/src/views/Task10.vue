<script setup lang="ts">
import TaskWrapper from "../components/TaskWrapper.vue"
import Task10 from "../tasks/task-10/Task10.vue"
</script>

<template>
	<TaskWrapper>
		<template #header>
			<h1>Task 10: Complex Event Handling</h1>
			<p>
				In this task, we will turn the tables. Instead of calling a backend function, we will create some logic in the backend that periodically sends messages to our frontend.
			</p>
			<p>
				Your task is to build the event-loop logic in the Go backend, but also receive the events properly in the frontend, all using the Wails runtime methods.
			</p>
		</template>
		<template #default>
			<Task10 />
		</template>
	</TaskWrapper>
</template>
