<script setup lang="ts">
// empty
</script>

<template>
	<div class="container">
		<div class="header">
			<slot name="header"></slot>
		</div>
		<div class="content">
			<div class="floating-card">
				<slot></slot>
			</div>
		</div>
	</div>
</template>

<style scoped>
.container {
	height: 100%;
	display: flex;
	flex-direction: column;
}

.header {
	/* empty */
}

.floating-card {
	background: light-dark(#f3f3f3, #202020);
	border-radius: 0.5rem;
	border: 2px light-dark(#e0e0e0, #242424) solid;
	padding: 2rem 4rem;
}

.content {
	height: 100%;
	display: grid;
	place-items: center;
	padding: 2rem;
}
</style>
