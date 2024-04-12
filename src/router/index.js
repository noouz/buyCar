import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/shoppingcart',
      name: 'shoppingcart',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/ShoppingCart.vue')
    },
    {
      path: '/shoppingcheck',
      name: 'shoppingcheck',
      component: () => import('../views/ShoppingCheck.vue')
    },
    {
      path: '/buysuccess',
      name: 'buysuccess',
      component: () => import('../views/BuySuccess.vue')
    },
  ]
})

export default router
