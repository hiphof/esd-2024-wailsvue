<script setup lang="ts">
import TaskWrapper from "../components/TaskWrapper.vue"
import Task9 from "../tasks/task-9/Task9.vue"
</script>

<template>
	<TaskWrapper>
		<template #header>
			<h1>Task 9: Two-Way Data Binding</h1>
			<p>
				hello welcome to task 9 you are well on your way to becoming an osu! rhythm champion
			</p>
		</template>
		<template #default>
			<Task9 />
		</template>
	</TaskWrapper>
</template>
