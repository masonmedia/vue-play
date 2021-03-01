import Vue from 'vue'
import VueRouter from 'vue-router'
import axios from 'axios'
import VueAxios from 'vue-axios'
import VueAnimateOnScroll from 'vue-animate-onscroll'
import stagger from '@plutonium-js/vue-stagger';
import Home from '../views/Home.vue'
import { BootstrapVue, BootstrapVueIcons } from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

Vue.use(BootstrapVue)
Vue.use(BootstrapVueIcons)
Vue.use(VueRouter)
Vue.use(VueAxios, axios)
Vue.use(VueAnimateOnScroll)
Vue.use(stagger)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/services',
    name: 'Services',
    component: () => import(/* webpackChunkName: "about" */ '../views/Services.vue')
  },
  {
    path: '/graphql',
    name: 'Graphql',
    component: () => import(/* webpackChunkName: "about" */ '../views/Graphql.vue')
  }
]

const router = new VueRouter({
  routes
  // router.beforeEach((to, from, next) => {
//   setTimeout(() => {
//     window.scrollTo(0, 0);
// }, 1000);
//   next();
// })
})

export default router
