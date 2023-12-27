/* eslint-disable vue/multi-word-component-names */

import { createRouter, createWebHistory } from 'vue-router';
import Home from '@/components/pages/Home.vue';
import Gallery from '@/components/pages/Gallery.vue';
import About from '@/components/pages/About.vue';
import Test from '@/components/pages/Test.vue';

const routes = [
	{ path: '/', component: Home },
	{ path: '/gallery', component: Gallery },
	{ path: '/about', component: About },
	{ path: '/test', component: Test },
];

const router = createRouter({
	history: createWebHistory(process.env.BASE_URL),
	routes,
});

export default router;
