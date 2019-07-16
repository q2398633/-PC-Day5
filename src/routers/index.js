import VueRouter from 'vue-router'
import Vue from 'vue'
import Login from '@/views/login'
import NotFound from '@/views/404'

Vue.use(VueRouter)

const router = new VueRouter({
  routes: [
    { name: 'login', path: '/login', component: Login },
    { name: '404', path: '*', component: NotFound }
  ]
})
export default router
