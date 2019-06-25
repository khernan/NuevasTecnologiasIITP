import Vue from 'vue'
import './plugins/vuetify'
import App from './App.vue'
import { store } from './store'
import router from './router'
import axios from 'axios'

Vue.config.productionTip = false
axios.defaults.baseURL = 'https://api.citybik.es/v2/networks?fields=id,name,location'

new Vue({
  render: h => h(App),
  store,
  router
}).$mount('#app')
