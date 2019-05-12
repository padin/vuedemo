<template>
    <div>
        {{title}}
        <h2>{{msg}}</h2>
        <button @click="emitToHome()">给Home组件传播数据</button>
    </div>
</template>

<script>
import VueEvent from './ve.js'
export default {
   data(){
       return {
           title:"this news components",
           msg:"this is news msg",
       }
   },
   methods:{
       emitToHome(){
           VueEvent.$emit('to-home','this is news msg');
       }
   } 
   //挂载时监听数据
   ,mounted(){
       VueEvent.$on('to-news',(data)=>{
           this.msg = data;
       })
   }
}
</script>
