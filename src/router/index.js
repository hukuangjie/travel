import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/views/home/Home.vue'
import City from '@/views/city/City.vue'
import Detail from '@/views/detail/Detail.vue'

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
    },
    {
      path: '/detail/:id',
      name: 'Detail',
      component: Detail
    },
  ],
  // 页面滚动会影响全局的，父组件滚动页面后，子组件也会滚动
  scrollBehavior (to, from, savedPosition) {
    return { x: 0, y: 0 }
  }
})
