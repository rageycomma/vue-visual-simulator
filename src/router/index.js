import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/views/HomeView'
import environment from '@/env';

const routes = [{
        path: '/',
        name: 'home',
        component: HomeView,
        props: {
            appName: environment.app_name
        }
    },
    {
        path: '/about',
        name: 'about',
        component: () =>
            import ( /* webpackChunkName: "about" */ '../views/AboutView.vue'),
        props: {
            appName: environment.app_name
        }
    }
]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
})

export default router