/* eslint-disable vue/multi-word-component-names */

import { createRouter, createWebHistory } from 'vue-router';
import HelloWorld from '@/components/pages/HelloWorld.vue';
import Home from '@/components/pages/Home.vue';

const routes = [
	{ path: '/', component: Home },
	{ path: '/hello', component: HelloWorld },
];

const router = createRouter({
	history: createWebHistory(),
	routes,
});

export default router;
