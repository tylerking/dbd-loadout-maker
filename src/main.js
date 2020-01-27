import '@fortawesome/fontawesome-free/css/all.css'

import Vue from 'vue'
import App from './App.vue'
import router from './router'

const VTooltip = require('v-tooltip')
Vue.use(VTooltip)
  
Vue.config.productionTip = false
Vue.prototype.$eventHub = new Vue()

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
