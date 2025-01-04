<script setup lang="ts">
</script>

<template>
	<nav class="router">
		<RouterLink class="router-link home" to="/">Home</RouterLink>
		<RouterLink class="router-link" to="/task-1">Task 1</RouterLink>
		<RouterLink class="router-link" to="/task-2">Task 2</RouterLink>
		<RouterLink class="router-link" to="/task-3">Task 3</RouterLink>
		<RouterLink class="router-link" to="/task-4">Task 4</RouterLink>
		<RouterLink class="router-link" to="/task-5">Task 5</RouterLink>
		<RouterLink class="router-link" to="/task-6">Task 6</RouterLink>
		<RouterLink class="router-link" to="/task-98">Task 98</RouterLink>
		<RouterLink class="router-link" to="/task-99">Task 99</RouterLink>
	</nav>
	<main>
		<RouterView />
	</main>
</template>

<style scoped>
.router-link {
	padding: 0.5rem 1rem;

	color: #787878;
	background: #282828;
	border-radius: 0 0 0.5rem 0.5rem;
	border: 2px #323232 solid;
	border-top: none;
	text-decoration: none;

	transition: all 0.1s ease-out;
}

.home {
	position: absolute;
	left: 0;

	border-top: none;
	border-left: none;
	border-radius: 0 0 0.5rem 0;
}

.router-link-active {
	font-weight: bold;
	color: hotpink;
}

.router-link:hover {
	box-shadow: rgba(255, 105, 180, 0.366) 0 0 3rem;
}

.router {
	display: flex;
	gap: 0.5rem;
	justify-content: center;
}
</style>
