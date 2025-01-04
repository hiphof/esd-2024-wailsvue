<script setup lang="ts">

import { onMounted, ref } from "vue"

/* NOTE: we don't have to fully type this, but just to showcase we can! */
const tagRef = ref<HTMLParagraphElement>()

onMounted(() => {
	if (tagRef.value) {
		tagRef.value.textContent = "✨ Happy New Year Everyone! 2️⃣0️⃣2️⃣5️⃣ 🎉"
	}
})
</script>

<template>
	<!--
		TODO 6.1:
		add the 'ref' attribute and pass our variable to it,
		so Vue knows where to store the reference
	-->
	<p ref="tagRef">This text should not be visible!</p>
</template>
