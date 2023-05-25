import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'

//Routes (Views)
const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/Orders',
    name: 'Orders',
    component: () => import( '../views/Orders.vue')
    
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
