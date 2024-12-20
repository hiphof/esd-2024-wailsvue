import { createRouter, createWebHistory } from "vue-router"

import Home from "./views/Home.vue"
import Task1 from "./views/Task1.vue"
import Task97 from "./views/Task97.vue"
import Task98 from "./views/Task98.vue"
import Task99 from "./views/Task99.vue"

const routes = [
	{ path: "/", component: Home },
	{ path: "/task-1", component: Task1 },
	{ path: "/task-97", component: Task97 },
	{ path: "/task-98", component: Task98 },
	{ path: "/task-99", component: Task99 },
]

export const router = createRouter({
	history: createWebHistory(),
	routes,
})
