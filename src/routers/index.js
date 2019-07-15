import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from '@/views/login'
import Index from '@/views/index'
import Welcome from '@/views/welcome'
import NotFound from '@/views/404'

Vue.use(VueRouter)

const router = {
  routes: [
    { name: 'login', path: '/login', component: Login },
    { name: 'index',
      path: '/',
      component: Index,
      children: [
        { name: 'welcome', path: '/', component: Welcome }
      ] },
    { path: '*', name: '404', component: NotFound }
  ]
}
export default router
