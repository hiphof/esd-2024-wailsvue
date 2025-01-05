<script setup lang="ts">
import TaskWrapper from "../components/TaskWrapper.vue"
import Task9 from "../tasks/task-9/Task9.vue"
</script>

<template>
	<TaskWrapper>
		<template #header>
			<h1>Task 9: Two-Way Data Binding</h1>
			<p>
				Two-way data binding? What's that?
			</p>
			<p>
				This task should show you that data can be manipulated both ways using 'v-model'. 
				From a user and programmatically.
			</p>
			<p>
				Make it possible to automatically update the quote by typing it yourself
				and replace that quote with a random Skyrim quote by pressing the button.
				Yes, that's a little weird example but it's to show your input automatically updates as well
				as the button press. 
			</p>
		</template>
		<template #default>
			<Task9 />
		</template>
	</TaskWrapper>
</template>
