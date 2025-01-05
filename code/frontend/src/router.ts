import { createRouter, createWebHashHistory } from "vue-router"

import Home from "./views/Home.vue"
import Task0 from "./views/Task0.vue"
import Task1 from "./views/Task1.vue"
import Task2 from "./views/Task2.vue"
import Task3 from "./views/Task3.vue"
import Task4 from "./views/Task4.vue"
import Task5 from "./views/Task5.vue"
import Task6 from "./views/Task6.vue"
import Task7 from "./views/Task7.vue"
import Task8 from "./views/Task8.vue"
import Task9 from "./views/Task9.vue"
import Task10 from "./views/Task10.vue"

const routes = [
	{ path: "/", component: Home },
	{ path: "/task-0", component: Task0 },
	{ path: "/task-1", component: Task1 },
	{ path: "/task-2", component: Task2 },
	{ path: "/task-3", component: Task3 },
	{ path: "/task-4", component: Task4 },
	{ path: "/task-5", component: Task5 },
	{ path: "/task-6", component: Task6 },
	{ path: "/task-7", component: Task7 },
	{ path: "/task-8", component: Task8 },
	{ path: "/task-9", component: Task9 },
	{ path: "/task-10", component: Task10 },
]

export const router = createRouter({
	history: createWebHashHistory(),
	routes,
})
