<script setup lang="ts">
import TaskWrapper from "../components/TaskWrapper.vue"
import Task3 from "../tasks/task-3/Task3.vue"
</script>

<template>
	<TaskWrapper>
		<template #header>
			<h1>Task 3: Computed Property</h1>
			<p>
				hello welcome to task 3 you are well on your way to becoming an osu! rhythm champion
			</p>
		</template>
		<template #default>
			<Task3 />
		</template>
	</TaskWrapper>
</template>
