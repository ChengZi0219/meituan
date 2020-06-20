// 引入资源 css js
// 引入vue框架 根组件 及 路由配置 插件
import Vue from 'vue'
import App from './App.vue'
// 导包
import ElementUI from 'element-ui'
// 默认加载索引文件(index.js/vue)
// @ --- src目录
import router from '@/router'
import axios from '@/api/axios'
import echarts from 'echarts'
import vueParticleLine from 'vue-particle-line'
import 'vue-particle-line/dist/vue-particle-line.css'

// 导入样式
import 'element-ui/lib/theme-chalk/index.css'
// 在全局范围内注册组件
Vue.use(ElementUI)
Vue.use(vueParticleLine)
Vue.use(axios)

Vue.prototype.$http = axios
Vue.prototype.$echarts = echarts

Vue.config.productionTip = false

new Vue({
  // 实例化根实例 render（）渲染app组件 挂载到#app的容器内
  render: h => h(App),
  router
}).$mount('#app')
