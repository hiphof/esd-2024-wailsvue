<script setup lang="ts">
import TaskWrapper from "../components/TaskWrapper.vue"
import Task98 from "../tasks/task-98/Task98.vue"
</script>

<template>
	<TaskWrapper>
		<template #header>
			<h1>Task 98: Custom Component</h1>
			<p>
				hello welcome to task 98 you are well on your way to becoming an osu! rhythm champion
			</p>
		</template>
		<template #default>
			<Task98 />
		</template>
	</TaskWrapper>
</template>
