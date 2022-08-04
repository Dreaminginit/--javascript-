// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css' //导入elementui的样式文件
import axios from 'axios'

Vue.config.productionTip = false
Vue.use(ElementUI)
// 配置请求的根路径
axios.defaults.baseURL = 'http://127.0.0.1:3000/'
// axios 请求拦截器
axios.interceptors.request.use(config => {
  // 为请求头对象，添加 token 验证的 Authorization 字段
  // 方便每次请求需访问权限的 api 接口，提交 token 验证
  config.headers.Authorization = window.sessionStorage.getItem('token')
  return config
})
Vue.prototype.$http = axios
Vue.prototype.$message = ElementUI.Message

Vue.config.devtools = true

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
