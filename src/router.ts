import Vue from 'vue'
import Router from 'vue-router'
import Leito from './views/Leito.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'leito',
      component: Leito
    },
    {
      path: '/leito',
      name: 'leito',
      component: Leito
    },
    {
      path: '/Hospital',
      name: 'Hospital',
      component: () => import('./views/Hospital.vue')
    }
  ]
})
