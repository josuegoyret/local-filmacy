import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/favorites',
      name: 'favorites',
      component: () => import('../views/FavsView.vue') // lazy-loaded
    },
    {
      path: '/trash',
      name: 'trash',
      component: () => import('../views/TrashView.vue') // lazy-loaded
    }
  ]
})

export default router
