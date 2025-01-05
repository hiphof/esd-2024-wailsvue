<script setup lang="ts">
import TaskWrapper from "../components/TaskWrapper.vue"
import Task5 from "../tasks/task-5/Task5.vue"
</script>

<template>
	<TaskWrapper>
		<template #header>
			<h1>Task 5: Fetch Weather Data</h1>
			<p>
				In this task we take a look at using 'Lifecycle Hooks'. 
				In this example we take a look specifically at 'onMounted' and 'onUnmounted'.
			</p>
			<p>
				While the manual button works for requesting weather data, we want it to refresh every ten seconds.
				That code should be run on mount!
			</p>
		</template>
		<template #default>
			<Task5 />
		</template>
	</TaskWrapper>
</template>
