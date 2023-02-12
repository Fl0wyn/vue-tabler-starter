import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
	history: createWebHistory(import.meta.env.BASE_URL),
	routes: [
		{
			path: "/",
			redirect: "/home",
		},
		{
			path: "/home",
			name: "Home",
			component: () => import("../views/Home.vue"),
		},
		{
			path: "/settings",
			name: "Settings",
			component: () => import("../views/Settings.vue"),
		},
		{
			path: "/:pathMatch(.*)*",
			component: () => import("../views/PageNotFound.vue"),
		},
	],
});

export default router;
