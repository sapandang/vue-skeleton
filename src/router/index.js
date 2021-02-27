import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Login from '../views/Login.vue';
import Compotainer from '../compotainer/Home.vue';
import CompotainerFull from '../compotainer/HomeFull.vue';

Vue.use(VueRouter)

const routes = [
    {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/compotainer',
    name: 'compotainer',
    component: Compotainer
  },
  {
    path: '/compfull',
    name: 'compfull',
    component: CompotainerFull
  },
  {
    path: '/login',
    name: 'login',
    component: Login
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  }
]

const router = new VueRouter({
  routes
})

export default router
