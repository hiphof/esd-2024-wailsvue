<script setup lang="ts">
import TaskWrapper from "../components/TaskWrapper.vue"
import Task8 from "../tasks/task-8/Task8.vue"
</script>

<template>
	<TaskWrapper>
		<template #header>
			<h1>Task 8: Custom Component</h1>
			<p>
				hello welcome to task 8 you are well on your way to becoming an osu! rhythm champion
			</p>
		</template>
		<template #default>
			<Task8 />
		</template>
	</TaskWrapper>
</template>
