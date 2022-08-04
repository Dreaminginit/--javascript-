import Vue from 'vue'
import Router from 'vue-router'
import home from '@/components/pages/home'

Vue.use(Router)

const router = new Router({
  routes: [
    {
      path: '/',
      redirect: '/Login_Register'
    },
    {
      path: '/home',
      name: 'home',
      component: home
    },
    {
      path: '/Login_Register',
      name: 'Login_Register',
      component: () => import('@/components/pages/Login_Register')
    },
    {
      path: '/userinfo',
      name: 'userinfo',
      component: () => import('@/components/pages/userinfo')
    },
    {
      path: '/Login_and_Register',
      name: 'Login_and_Register',
      component: () => import('@/components/pages/Login_and_Register')
    },
    {
      path: '/Project',
      name: 'Project',
      component: () => import('@/components/pages/Project')
    },
    {
      path: '/Project_access',
      name: 'Project_access',
      component: () => import('@/components/pages/Project_access')
    },
    {
      path: '/Project_jindu',
      name: 'Project_jindu',
      component: () => import('@/components/pages/Project_jindu')
    }
  ]
})

// 挂载路由导航守卫
router.beforeEach((to, from, next) => {
  // to 将要访问的路径
  // from 表示从哪个路径跳转而来
  // next 是一个函数，表示放行
    // next() 直接放行     next('强制跳转路径')  强制跳转
    if(to.path === '/Login_Register' || to.path === '/Login_and_Register') return next()
    // 获取token
    const tokenStr = window.sessionStorage.getItem('token')
    if(!tokenStr) return next('/Login_Register')
    next()

})

export default router