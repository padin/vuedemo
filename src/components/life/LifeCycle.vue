<template>
  <div>
    <h2>{{msg}}</h2>
    看这里↓<v-subcomp v-if="flag"></v-subcomp>
    <button @click="mount()">挂载/卸载组件</button>
  </div>
</template>

<script>
import SubComp from '../comp/SubComp.vue'
export default {
   data(){
       return {
           msg:'生命周期演示',
           flag:false
       }
   }
   ,components:{
       'v-subcomp':SubComp
   }
   ,methods:{
       mount(){
           this.flag=!this.flag;
       }
   }
}
</script>

<style>
</style>

