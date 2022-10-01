import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import AboutView from '../views/AboutView.vue'
import InterestedView from '../views/InterestedView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/about',
      name: 'about',
     component: AboutView
    },
    {
      path: '/interesting',
      name: 'interested',
     component: InterestedView
    }
  ]
})

export default router
