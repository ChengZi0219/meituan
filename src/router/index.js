// 创建路由对象 及配置路由规则
// 导入
import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from '@/views/login'
import Home from '@/views/home'
import Welcome from '@/views/welcome/index.vue'
import Hello from '@/views/welcome/hello.vue'
import Settings from '@/views/settings'
import NotFound from '@/views/404'
// 注册
Vue.use(VueRouter)
// 初始化router对象
const router = new VueRouter({
  // 路由规则
  // 路由中间件
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
      children: [
        { path: '/welcome', name: 'welcome', component: Welcome },
        { path: '/hello', name: 'Hello', component: Hello },
        { path: '/Settings', name: 'Settings', component: Settings }
      ],
      redirect: '/login'
    },
    { path: '/login', name: 'login', component: Login },
    // 没有任何程序去处理这个路径
    { path: '*', name: '404', component: NotFound }
  ]
})
// 导出（挂载在根实例main.js）
export default router
