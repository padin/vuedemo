<template>
    <div>
        {{title}}
        <h2>{{msg}}</h2>
        <button v-on:click="emitNews()">给News组件传播数据</button> 
    </div>
</template>

<script>
import VueEvent from './ve.js';
export default {
   data(){
       return {
           title:"this is home component",
           msg:"this is home msg",
       }
   },
   methods:{
       emitNews(){
           VueEvent.$emit('to-news','this is home msg')
       }
   }
   ,mounted(){
       VueEvent.$on('to-home',(data)=>{
           this.msg = data;
       })
   } 
}
</script>
