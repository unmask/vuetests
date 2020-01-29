import Vue from 'vue'
import VueRouter from 'vue-router'
import HomePage from '@/components/HomePage.vue'

Vue.use(VueRouter)
const routes = [
  { path: '/home', component: HomePage }
]

const router = new VueRouter({
  routes
})

export default router
