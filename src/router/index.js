import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/views/home/Home.vue'
import City from '@/views/city/City.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
        path: '/city',
        name: 'City',
        component: City
      }
  ]
})