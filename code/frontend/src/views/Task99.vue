<script setup lang="ts">
import TaskWrapper from "../components/TaskWrapper.vue"
import Task99 from "../tasks/task-99/Task99.vue"
</script>

<template>
	<TaskWrapper>
		<template #header>
			<h1>Task 99: Two-Way Data Binding</h1>
			<p>
				hello welcome to task 99 you are well on your way to becoming an osu! rhythm champion
			</p>
		</template>
		<template #default>
			<Task99 />
		</template>
	</TaskWrapper>
</template>
