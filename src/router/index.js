import Vue from 'vue'
import VueRouter from 'vue-router'
import MainPage from '@/views/MainPage'
import TestPage from '@/components/TestPage'
import ProgramPage from '@/views/ProgramPage'

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
  },
  {
    path: '/program',
    name: 'program',
    component: ProgramPage
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
