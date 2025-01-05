<script setup lang="ts">
</script>

<template>
	<nav class="router">
		<RouterLink class="router-link home" to="/">Home</RouterLink>
		<RouterLink class="router-link" to="/task-0">T0</RouterLink>
		<RouterLink class="router-link" to="/task-1">T1</RouterLink>
		<RouterLink class="router-link" to="/task-2">T2</RouterLink>
		<RouterLink class="router-link" to="/task-3">T3</RouterLink>
		<RouterLink class="router-link" to="/task-4">T4</RouterLink>
		<RouterLink class="router-link" to="/task-5">T5</RouterLink>
		<RouterLink class="router-link" to="/task-6">T6</RouterLink>
		<RouterLink class="router-link" to="/task-7">T7</RouterLink>
		<RouterLink class="router-link" to="/task-8">T8</RouterLink>
		<RouterLink class="router-link" to="/task-9">T9</RouterLink>
		<RouterLink class="router-link" to="/task-10">T10</RouterLink>
	</nav>
	<main>
		<RouterView />
	</main>
</template>

<style scoped>
.router-link {
	padding: 0.5rem 1rem;

	color: light-dark(#656565, #787878);
	background: light-dark(#d9d9d9, #282828);
	border-radius: 0 0 0.5rem 0.5rem;
	border: 2px light-dark(#c7c7c7, #323232) solid;
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
	color: light-dark(#696CFF, hotpink);
}

.router-link:hover {
	box-shadow: light-dark(rgba(105, 108, 255, 0.79), rgba(255, 105, 180, 0.366)) 0 0 3rem;
}

.router {
	display: flex;
	gap: 0.5rem;
	justify-content: center;
}
</style>
