import Vue from 'vue'
import Vuex from 'vuex'
import state from './state'
import mutations from './mutations'

Vue.use(Vuex)

export default new Vuex.Store({
  // 这里没有用到异步，所以可以省略action
  // actions: {
  //   changeCity (ctx, city) {
  //     ctx.commit('changeCity',city)
  //   }
  // },
  state,
  mutations,
  // getters: {
  //   doubleCity (state) {
  //     return state.city + ' ' + state.city
  //   }
  // }
})
