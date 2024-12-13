import { createRouter, createWebHistory } from "vue-router"

import Home from "./components/Home.vue"
import Task1 from "./components/Task1.vue"
import Task2 from "./components/Task2.vue"
import Task3 from "./components/Task3.vue"
import Task4 from "./components/Task4.vue"

const routes = [
	{ path: "/", component: Home },
	{ path: "/task-1", component: Task1 },
	{ path: "/task-2", component: Task2 },
	{ path: "/task-3", component: Task3 },
	{ path: "/task-4", component: Task4 },
]

export const router = createRouter({
	history: createWebHistory(),
	routes,
})
