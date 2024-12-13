<script setup lang="ts">
import { ref } from 'vue';
import Task4Input from './Task4Input.vue';
const name = ref('');
</script>

<template>
    <div>
        <h1>Task 4: Two-Way Data Binding</h1>
        <p>Enter your name:</p>
        <Task4Input v-model="name"/>
        <p>Hello, {{ name }}!</p>
    </div>
</template>
