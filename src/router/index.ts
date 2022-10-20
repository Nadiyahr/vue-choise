import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
      meta: {
        headerClass: 'bg-dark',
        iconClass: '$my-dark',
        textClass: 'text-white',
        brandClass: '$content-heading'
      }
    },
    {
      path: '/about',
      name: 'about',
      component: () => import('../views/AboutView.vue'),
      meta: {
        headerClass: 'bg-prymary-light',
        iconClass: '$my-dark',
        textClass: 'text-dark',
        brandClass: ''
      }
    },
    {
      path: '/client',
      name: 'client',
      component: () => import('../views/ClientView.vue'),
      meta: {
        headerClass: 'bg-prymary-light',
        iconClass: '$my-dark',
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
