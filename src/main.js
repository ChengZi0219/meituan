// 引入资源 css js
// 引入vue框架 根组件 及 路由配置 插件
import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

new Vue({
  // 实例化根实例 render（）渲染app组件 挂载到#app的容器内
  render: h => h(App)
}).$mount('#app')
