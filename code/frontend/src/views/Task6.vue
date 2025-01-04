<script setup lang="ts">
import TaskWrapper from "../components/TaskWrapper.vue"
import Task6 from "../tasks/task-6/Task6.vue"
</script>

<template>
	<TaskWrapper>
		<template #header>
			<h1>Task 6: Element References</h1>
			<p>
				hello welcome to task 6 you are well on your way to becoming an osu! rhythm champion
			</p>
		</template>
		<template #default>
			<Task6 />
		</template>
	</TaskWrapper>
</template>
