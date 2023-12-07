import { createRouter, createWebHistory } from 'vue-router'
import aboutview from '../views/AboutView.vue'
import shuview from '../views/shuview.vue'
import shiview from '../views/shiview.vue'
import chengview from '../views/chengview.vue'
import jiaview from '../views/jiaview.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: aboutview
    },
    {
      path: '/shu',
      name: 'shu',
      component: shuview
    },
    {
      path: '/jia',
      name: 'jia',
      component: jiaview
    },
    {
      path: '/cheng',
      name: 'cheng',
      component: chengview
    },
    {
      path: '/shi',
      name: 'shi',
      component: shiview
    }
  ]
})

export default router
