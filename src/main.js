import Vue from 'vue'
import App from './App.vue'

import VueRouter from 'vue-router'
Vue.use(VueRouter)
import VueResource from 'vue-resource'
Vue.use(VueResource)
import ElementUI from 'element-ui'
Vue.use(ElementUI)

new Vue({
  el: '#app',
  render: h => h(App)
})
