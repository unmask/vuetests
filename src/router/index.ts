import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '@/views/Home.vue'
import About from '@/views/About.vue'
import SearchPage from '@/views/SearchPage.vue'

Vue.use(VueRouter)
const routes = [
  { path: '/', redirect: '/search' },
  { path: '/search', meta: { layout: 'noHeader' }, component: SearchPage },
  { path: '/home', component: Home },
  { path: '/about', component: About }
]

const router = new VueRouter({
  routes
})

export default router
