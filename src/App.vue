<template>
  <div id="app">
   
    <h1>{{ msg }}</h1>
   

    <div class="left">
    <ul>
      <li><router-link to="/databind">数据绑定</router-link></li>
      <li><router-link to="/stylebind">样式绑定</router-link></li>
      <li><router-link to="/mvvm">双向数据绑定</router-link></li>
      <li><router-link to="/event">事件</router-link></li>
      <li><router-link to="/todolist">todolist和storage</router-link></li>
      <li><router-link to="/comp">组件</router-link></li>
      <li><router-link to="/lifecycle">生命周期</router-link></li>
      <li><router-link to="/vueresource">vue-resource</router-link></li>
      <li><router-link to="/parent">父子组件传值</router-link></li>
      <li><router-link to="/main">非父子组件传值</router-link></li>
      <li><router-link to="/dynamic">动态路由传值与get传值</router-link></li>
      <li><router-link to="/history">编程式导航及History模式</router-link></li>
      <li><router-link to="/includerouter">嵌套路由</router-link></li>
      <li><router-link to="/elementdemo">ElementUI</router-link></li>
      <li><router-link to="/vuexdemo">Vuex</router-link></li>
      <li><router-link to="/vuexdemo2">Vuex(二)</router-link></li>

    </ul>
    </div>
    <div class="right">
    <router-view></router-view>
    </div>

    
   
  </div>
  
</template>

<script>
export default {
  name: 'app',
  data () {
    return {
      msg: ' Vue demo example'
    }
  }
}
</script>

<style>
.left {
  float: left;
  width:300px;
  border-left: 1px solid #eee;
}
.right {
  float: left;
}


a {
  color: #42b983;
}
</style>
