import { createRouter, createWebHistory } from "vue-router"

import Home from "./views/Home.vue"
import Task1 from "./views/Task1.vue"
import Task2 from "./views/Task2.vue"
import Task3 from "./views/Task3.vue"
import Task98 from "./views/Task98.vue"
import Task99 from "./views/Task99.vue"

const routes = [
	{ path: "/", component: Home },
	{ path: "/task-1", component: Task1 },
	{ path: "/task-2", component: Task2 },
	{ path: "/task-3", component: Task3 },
	{ path: "/task-98", component: Task98 },
	{ path: "/task-99", component: Task99 },
]

export const router = createRouter({
	history: createWebHistory(),
	routes,
})
