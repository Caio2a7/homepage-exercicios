import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/sobre',
    name: 'About',
    component: function () {
      return import('../views/About.vue')
    }
  },
  {
    path: '/perfil',
    name: 'Profile',
    component: function () {
      return import('../views/Profile.vue')
    }
  },
  {
    path: '/login',
    name: 'Login',
    component: function () {
      return import('../views/Login.vue')
    }
  },
  {
    path: '/contato',
    name: 'Contact',
    component: function () {
      return import('../views/Contact.vue')
    }
  },
  {
    path: '/forum',
    name: 'Forum',
    component: function () {
      return import('../views/Forum.vue')
    }
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
