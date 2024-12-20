<script setup lang="ts">
import { reactive } from "vue"

/* TODO 2.1:
    add reactivity to the following object
    this time, we are using 'reactive' instead of 'ref'
*/
const player = reactive({
    name: "Player1",
    health: 100,
    strength: 20,
})

/* TODO 2.2: update the function to change the player's stats */
function reRollStats() {
    player.health = 75 + Math.floor(Math.random() * 25)
    player.strength = Math.floor(Math.random() * 50)
}
</script>

<template>
    <h3>Player Stats</h3>
    <p>Name: <b>{{ player.name }}</b></p>
    <p>Health: <b>{{ player.health }}</b></p>
    <p>Strength: <b>{{ player.strength }}</b></p>

    <button @click="reRollStats">
        Re-Roll Stats
    </button>
</template>
