import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import request from './utils/request'

Vue.config.productionTip = false
Vue.prototype.$request = request

const vm=new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')

// console.log("vm",vm)