import Vue from 'vue'
import router from './router'
import App from './App.vue'
import axios from 'axios'
import toastr from 'toastr'

axios.defaults.baseURL = 'http://localhost:8000'
Vue.prototype.$http = axios

require('toastr/build/toastr.min.css')
Vue.prototype.$toastr = toastr

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
