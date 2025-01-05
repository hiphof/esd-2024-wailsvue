<script setup lang="ts">
import TaskWrapper from "../components/TaskWrapper.vue"
import Task7 from "../tasks/task-7/Task7.vue"
</script>

<template>
	<TaskWrapper>
		<template #header>
			<h1>Task 7: List Rendering</h1>
			<p>
				Hm, our list is not properly rendering. It's only showing one singular item.
			</p>
			<p>
				You can't fight with just an 'Iron Dagger'. Your inventory should be way better.
			</p>
			<p>
				Use the 'v-for' directive to iterate your inventory!
			</p>
		</template>
		<template #default>
			<Task7 />
		</template>
	</TaskWrapper>
</template>
