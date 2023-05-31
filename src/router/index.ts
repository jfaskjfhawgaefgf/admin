import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Video from '../views/Video.vue'
import Login from '@/views/Login.vue'
import User from '@/views/User.vue'
const routes = [
  {
    path: '/admin',
    name: 'home',
    component: Home,
    redirect:'/video',
    children:[
      {
        path: '/video',
        component:Video
      },
      {
        path: '/User',
        component:User
      }
    ]
  },
  {
    path: '/login',
    name: 'login',
    component: Login,
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
