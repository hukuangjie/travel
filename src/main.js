import Vue from 'vue'
import App from './App.vue'
import router from './router/index'
import store from './store/index'
import VueAwesomeSwiper from 'vue-awesome-swiper'
import 'babel-polyfill'   //有些手机浏览器不支持ES6，添加这个可以兼容
import './assets/styles/reset.css'
import './assets/styles/border.css'
import './assets/styles/iconfont.css'
import 'swiper/dist/css/swiper.css'

Vue.config.productionTip = false
Vue.use(VueAwesomeSwiper, /* { default global options } */ )

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')