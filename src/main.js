import Vue from 'vue'
import App from './App.vue'

import VueResource from 'vue-resource'
Vue.use(VueResource)

import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css';
Vue.use(ElementUI)

// 模块化路由
import router from './router/index.js'
new Vue({
  el: '#app',
  router,
  render: h => h(App)
})