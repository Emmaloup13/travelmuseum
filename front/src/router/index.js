import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView'
import MuseesListView from '../views/MuseesListView'
import MuseeView from '../views/MuseeView'

const routes = [
    {
        path: '/',
        name: 'Home',
        component: HomeView
    },
    {
        path: '/musees/:region',
        name: 'Musees',
        component: MuseesListView
    },
    {
        path: '/musees/:region/:id',
        name: 'Musee',
        component: MuseeView
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes
})


export default router
