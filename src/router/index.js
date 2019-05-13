import Vue from 'vue'
// 0. 如果使用模块化机制编程，导入Vue和VueRouter，要调用 Vue.use(VueRouter)
import VueRouter from 'vue-router'
Vue.use(VueRouter)

// 1. 定义 (路由) 组件。
// 可以从其他文件 import 进来

import DataBind from '../components/databind/DataBind.vue'
import StyleBind from '../components/stylebind/Stylebind.vue'
import Mvvm from '../components/mvvm/Mvvm.vue'
import Event from '../components/event/Event.vue'
import TodoList from '../components/todolist/TodoList.vue'
import Comp from '../components/comp/Comp.vue'
import LifeCycle from '../components/life/LifeCycle.vue'
import Vueresource from '../components/vueresource/Vueresource.vue'
import Parent from '../components/include/Parent.vue'
import News from '../components/noinclude/News.vue'
import Home from '../components/noinclude/Home.vue'
import Main from '../components/noinclude/main.vue'
import DynamicNews from '../components/dynamic/News.vue'
import DynamicContent from '../components/dynamic/Content.vue'
import DynamicPContent from '../components/dynamic/PContent.vue'
import History from '../components/routermodel/History.vue'
import IncludeRouter from '../components/include/IncludeRouter.vue'
import User from '../components/include/User.vue'
import UserAdd from '../components/include/user/UserAdd.vue'
import UserList from '../components/include/user/UserList.vue'
import ElementDemo from '../components/element/ElementDemo.vue'
import VuexDemo from '../components/vuex/VuexDemo.vue'
// 2. 定义路由
// 每个路由应该映射一个组件。 其中"component" 可以是
// 通过 Vue.extend() 创建的组件构造器，
// 或者，只是一个组件配置对象。
// 我们晚点再讨论嵌套路由。
const routes = [
  { path: '/databind', component: DataBind },
  { path: '/stylebind', component: StyleBind },
  { path: '/mvvm', component: Mvvm },
  { path: '/event', component: Event },
  { path: '/todolist', component: TodoList },
  { path: '/comp', component: Comp },
  { path: '/lifecycle', component: LifeCycle },
  { path: '/vueresource', component: Vueresource},
  { path: '/parent2child', component: Parent},
  { path: '/news', component: News},
  { path: '/home', component: Home},
  { path: '/main', component: Main},
  { path: '/dynamic', component: DynamicNews},
  { path: '/dynamicContent/:aid', component: DynamicContent},
  { path: '/dynamicPContent/', component: DynamicPContent},
  { path: '/history/', component: History},
    { 
      path: '/user/',
      component: User,
      children: [
        { path: 'useradd', component: UserAdd },
        { path: 'userlist', component: UserList },
      ] 
    },
  { path: '/includerouter/', component: IncludeRouter},
  { path: '/elementdemo/', component: ElementDemo},
  { path: '/vuexdemo/', component: VuexDemo},

]

// 3. 创建 router 实例，然后传 `routes` 配置
// 你还可以传别的配置参数, 不过先这么简单着吧。
const router = new VueRouter({
  mode:'history',
  routes // (缩写) 相当于 routes: routes
})


export default router;
