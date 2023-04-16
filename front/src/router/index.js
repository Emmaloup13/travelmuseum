import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView'
import TestView from '../views/TestView'

const routes = [
    {
        path: '/',
        name: 'Home',
        component: HomeView
    },
    {
        path: '/musees/:region',
        name: 'Musees',
        component: TestView
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes
})


export default router
