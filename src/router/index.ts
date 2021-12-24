import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'
import { localGet } from '@/utils'
import Home from '@/views/Home.vue'
import Login from '@/views/User/Login.vue'
import Album from '@/views/Album/Album.vue'
import Pic from '@/views/Album/Pic.vue'
import AlbumSet from '@/views/Album/Set.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    redirect: '/album'
  },
  {
    path: '/home',
    name: 'Home',
    component: Home,
    children: [
      {
        path: '/album',
        name: 'Album',
        component: Album
      },
      {
        path: '/pic/:id',
        name: 'Pic',
        component: Pic
      },
      {
        path: '/albumset',
        name: 'AlbumSet',
        component: AlbumSet
      }
    ]
  },
  {
    path: '/login',
    name: 'Login',
    component: Login
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

// 给路由设置守卫函数
// eslint-disable-next-line consistent-return
router.beforeEach((to, form, next) => {
  // to表示将要访问的路径
  // form表示从那个页面跳转而来
  // next表示允许跳转到指定位置
  if (to.path === '/login') return next()
  // 获取用户本地的token, 如果token不存在则跳转到登录页
  const tokenStr = localGet('session')
  if (!tokenStr) return next('/login')
  next()
})

export default router
