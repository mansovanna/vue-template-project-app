import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const routes = [
 {
  path: '/',
  name: 'screen',
  component: import('@/components/layouts/ScreenView.vue'),
  children: [
    {
      path: '',
      name: 'home',
      component: HomeView
    },
    {
      path: 'setting',
      name: 'setting',
      component: import('@/views/SettingView.vue'),
    },
    {
      path: 'about',
      name: 'about',
  
      component: () => import('../views/AboutView.vue')
    }
  ]
 }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
