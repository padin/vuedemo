<template>
  <div>
    <h2>{{msg}}</h2>
    <div style="border: 1px solid #000">
        <!-- 通过调用子组件的时候传值 -->
         <v-child :title="title" ref='child'></v-child>
    </div>
    <button @click="runChildMethod()">调用子组件的方法</button>
  </div>
</template>

<script>
import Child from '../comp/Child.vue'
export default {
   data(){
       return {
           msg:'演示父子组件传值',
           title:'这是父组件的属性title'
       }
   }
   ,components:{
       'v-child':Child
   }
   ,methods:{
        runChildMethod(){
            this.$refs.child.show();
        }
   }
}
</script>

<style>
</style>

