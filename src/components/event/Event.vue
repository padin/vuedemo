<template>
    <div>
        <h2>{{msg}}</h2>
        <input v-model="msg">
        <button v-on:click="run1()">执行事件的第一种方法</button> 
        <button @click="run2()">执行事件的第二种方法</button> 
        <hr>
        <button @click="getEvent($event)">获取事件</button>
    </div>
</template>

<script>
export default {
   data(){
       return {
           msg:"你好vue",
       }
   },
   methods:{
       run1(){
           alert(this.msg);
       },
       run2(){
           alert(this.msg);
       },
       getEvent(e){
           alert(e);
           console.log(e)
           e.srcElement.style.background='red'
       },
       
   } 
}
</script>
