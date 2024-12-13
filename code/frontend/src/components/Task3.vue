<script setup lang="ts">
import TaskWrapper from "./TaskWrapper.vue"
import Task3Card from './Task3Card.vue';
</script>

<template>
    <TaskWrapper>
        <template #header>
            <h1>Task 3: Custom Component</h1>
            <p>
                hello welcome to task 3 you are well on your way to becoming an osu! rhythm champion
            </p>
        </template>
        <template #default>
            <Task3Card title="Vue is awesome!" content="Vue makes frontend development simpler." />
        </template>
    </TaskWrapper>
</template>
