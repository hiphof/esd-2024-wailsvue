<script setup lang="ts">
import TaskWrapper from "../components/TaskWrapper.vue"
import Task4 from "../tasks/task-4/Task4.vue"
</script>

<template>
	<TaskWrapper>
		<template #header>
			<h1>Task 4: Conditional Rendering</h1>
			<p>
				hello welcome to task 4 you are well on your way to becoming an osu! rhythm champion
			</p>
		</template>
		<template #default>
			<Task4 />
		</template>
	</TaskWrapper>
</template>
