import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
      meta: {
        headerClass: 'bg-dark',
        headerMobile: 'light',
        iconClass: '#f2cf7e',
        textClass: 'text-white',
        brandClass: 'text-white'
      }
    },
    {
      path: '/about',
      name: 'about',
      component: () => import('@/views/AboutView.vue'),
      meta: {
        headerClass: 'bg-info',
        headerMobile: 'info',
        iconClass: '#2b146c',
        textClass: 'text-dark',
        brandClass: ''
      }
    },
    {
      path: '/client',
      name: 'client',
      component: () => import('@/views/ClientView.vue'),
      props: true,
      meta: {
        headerClass: 'bg-info',
        headerMobile: 'info',
        iconClass: '#2b146c',
        textClass: 'text-dark',
        brandClass: ''
      }
    },
  ],
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    }
    if (to.hash) {
      return {
        el: to.hash,
        behavior: 'smooth',
      };
    }
    return { x: 0, y: 0 };
  },
})

export default router
