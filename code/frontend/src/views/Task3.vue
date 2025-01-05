<script setup lang="ts">
import TaskWrapper from "../components/TaskWrapper.vue"
import Task3 from "../tasks/task-3/Task3.vue"
</script>

<template>
	<TaskWrapper>
		<template #header>
			<h1>Task 3: Computed Property</h1>
			<p>
				Here we take a look at the 'computed' property. We want to automatically update on dependency changes!
			</p>
			<p>
				Can you make the squared value automatically update when the incremented value changes?
			</p>
		</template>
		<template #default>
			<Task3 />
		</template>
	</TaskWrapper>
</template>
