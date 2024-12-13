<script lang="ts" setup>
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
	background: #202020;
	border-radius: 0.5rem;
	border: 2px #242424 solid;
	padding: 2rem;
}

.content {
	height: 100%;
	display: flex;
	flex-direction: column;
	justify-content: center;
	padding: 2rem;
}
</style>
