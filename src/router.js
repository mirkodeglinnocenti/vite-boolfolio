import { createRouter, createWebHistory } from "vue-router";

import Home from './pages/Home.vue';
import Portfolio from './pages/Portfolio.vue';
import About from './pages/About.vue';
import Project from './pages/Project.vue';

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/',
            name: 'home',
            component: Home
        },
        {
            path: '/portfolio',
            name: 'projects.index',
            component: Portfolio
        },
        {
            path: '/about',
            name: 'about',
            component: About
        },
        {
            path: '/portfolio/:slug',
            name: 'projects.show',
            component: Project
        }
    ]
})

export { router };