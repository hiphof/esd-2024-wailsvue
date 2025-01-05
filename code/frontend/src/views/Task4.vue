<script setup lang="ts">
import TaskWrapper from "../components/TaskWrapper.vue"
import Task4 from "../tasks/task-4/Task4.vue"
</script>

<template>
	<TaskWrapper>
		<template #header>
			<h1>Task 4: Conditional Rendering</h1>
			<p>
				Welcome to task 4, where we will check out conditional rendering!
			</p>
			<p>
				The buttons don't work like the should, make the buttons show the status message using conditionals.
				Check out 'v-if', 'v-else-if' and 'v-else'
			</p>
		</template>
		<template #default>
			<Task4 />
		</template>
	</TaskWrapper>
</template>
