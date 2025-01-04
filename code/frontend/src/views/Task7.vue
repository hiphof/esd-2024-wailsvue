<script setup lang="ts">
import TaskWrapper from "../components/TaskWrapper.vue"
import Task7 from "../tasks/task-7/Task7.vue"
</script>

<template>
	<TaskWrapper>
		<template #header>
			<h1>Task 7: List Rendering</h1>
			<p>
				hello welcome to task 7 you are well on your way to becoming an osu! rhythm champion
			</p>
		</template>
		<template #default>
			<Task7 />
		</template>
	</TaskWrapper>
</template>
