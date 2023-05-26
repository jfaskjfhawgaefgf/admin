import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Video from '../views/Video.vue'
import Login from '@/views/Login.vue'
const routes = [
  {
    path: '/',
    name: 'home',
    component: Home,
    // redirect:'/video',
    children:[
      {
        path: '/video',
        component:Video
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
