<script setup lang="ts">
import { ref } from "vue"
import QuoteMachine from "./QuoteMachine.vue"

/* NOTE: this is the variable which holds our quote */
const quote = ref("")
</script>

<template>
	<p>Enter a Quote:</p>
	<!--
		TODO 9.1:
		using the "v-model" directive,
		create a two-way data binding property that is update inside the child component
	-->
	<QuoteMachine />

	<p v-if="quote !== ''">Quote: "{{ quote }}"</p>
	<p v-else>No Quote</p>
</template>
