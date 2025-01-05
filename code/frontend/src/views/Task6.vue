<script setup lang="ts">
import TaskWrapper from "../components/TaskWrapper.vue"
import Task6 from "../tasks/task-6/Task6.vue"
</script>

<template>
	<TaskWrapper>
		<template #header>
			<h1>Task 6: Element References</h1>
			<p>
				This one is a very short one.
			</p>
			<p>
				Reference a HTML element via a 'ref' attribute. It should show a different text due to the reference!
			</p>
		</template>
		<template #default>
			<Task6 />
		</template>
	</TaskWrapper>
</template>
