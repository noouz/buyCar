import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/views/Home.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/shoppingcar',
      name: 'shoppingcar',
      component: () => import('@/views/Shoppingcar.vue')
    },
    {
      path: '/shoppingcheck',
      name: 'shoppingcheck',
      component: () => import('@/views/Shoppingcheck.vue')
    },
    {
      path: '/buysuccess',
      name: 'buysuccess',
      component: () => import('@/views/Buysuccess.vue')
    },
  ]
})

export default router
