import Vue from 'vue'
import VueRouter from 'vue-router'
import MainPage from '@/views/MainPage'
import TestPage from '@/components/TestPage'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'main',
    component: MainPage
  },
  {
    path: '/test',
    name: 'test',
    component: TestPage
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
