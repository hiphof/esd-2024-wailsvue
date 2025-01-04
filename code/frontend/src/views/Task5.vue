<script setup lang="ts">
import TaskWrapper from "../components/TaskWrapper.vue"
import Task5 from "../tasks/task-5/Task5.vue"
</script>

<template>
	<TaskWrapper>
		<template #header>
			<h1>Task 5: Fetch Weather Data</h1>
			<p>
				hello welcome to task 5 you are well on your way to becoming an osu! rhythm champion
			</p>
		</template>
		<template #default>
			<Task5 />
		</template>
	</TaskWrapper>
</template>
