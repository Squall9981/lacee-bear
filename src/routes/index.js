/* eslint-disable vue/multi-word-component-names */

import { createRouter, createWebHistory } from 'vue-router';
import HelloWorld from '@/components/pages/HelloWorld.vue';
import Home from '@/components/pages/Home.vue';
import Gallery from '@/components/pages/Gallery.vue';
import About from '@/components/pages/About.vue';

const routes = [
	{ path: '/', component: Home },
	{ path: '/hello', component: HelloWorld },
	{ path: '/gallery', component: Gallery },
	{ path: '/about', component: About },
];

const router = createRouter({
	history: createWebHistory(process.env.BASE_URL),
	routes,
});

export default router;
