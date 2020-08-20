import Vue from 'vue'
import App from './App.vue'
import ElementUI from 'element-ui'
import router from './router/'
import 'element-ui/lib/theme-chalk/index.css'

Vue.config.productionTip = false

Vue.use(ElementUI);
new Vue({
  //把router注入Vue实例
  router,
  render: h => h(App),
})
.$mount('#app')//挂载在#app上
