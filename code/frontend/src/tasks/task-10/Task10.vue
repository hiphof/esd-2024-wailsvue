<script setup lang="ts">
import { onMounted, onUnmounted, reactive, computed } from "vue"
import { EventsOn, EventsOff } from "../../../wailsjs/runtime"

type Message = {
	text: string
	timestamp: number
}

const messages = reactive<Message[]>([])
/* TODO 10.3: add computed property to get the last 5 messages in reverse order */

function onMessage(msg: string) {
	messages.push({ text: msg, timestamp: new Date().valueOf() })
}

onMounted(() => {
	/* TODO 10.4: use the Wails runtime method "EventsOn" to bind "onMessage" to the "message" event */
})

onUnmounted(() => {
	/* TODO 10.5: use the Wails runtime method "EventsOff" to unbind from the "message" event */
})
</script>

<template>
	<div class="container">
		<!-- TODO 10.6: iterate over your computed property -->
		<p v-for="msg in []" class="message">
			<!-- COMMENT BACK IN -->
			<!-- <i class="timestamp">{{ new Date(msg.timestamp).toLocaleTimeString() }}</i> -->
			<!-- <b>{{ msg.text }}</b> -->
		</p>
	</div>
</template>

<style scoped>
.timestamp {
	opacity: 0.7;
}

.message {
	display: flex;
	gap: 0.5rem;
}
</style>
