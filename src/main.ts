import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import Default from '@/layout/Default.vue'
import NoHeader from '@/layout/NoHeader.vue'
Vue.component('default-layout', Default)
Vue.component('noHeader-layout', NoHeader)
new Vue({
  router,
  store,
  render: (h) => h(App)
}).$mount('#app')
