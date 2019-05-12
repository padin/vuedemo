<template>
  <div>
      111
    <h2>{{msg}}</h2>
    <v-subcomp></v-subcomp>
  </div>
</template>

<script>
import SubComp from './SubComp.vue'
export default {
   data(){
       return {
           msg:'首页组件'
       }
   }
   ,components:{
       'v-subcomp':SubComp
   }
}
</script>

<style>
</style>

