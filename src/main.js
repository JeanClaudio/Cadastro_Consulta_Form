import Vue from 'vue'
import App from './App.vue'
import router from './router'
import bootstrap from './bootstrap'
import VMask from 'v-mask'

export const bus = new Vue()

Vue.use(VMask);
Vue.config.productionTip = false
Vue.use(bootstrap);

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
