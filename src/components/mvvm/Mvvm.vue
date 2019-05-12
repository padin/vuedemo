<template>
    <div>
        <h2>{{msg}}</h2>
        <input v-model="msg">
        <button @click="getMsg()">获取</button> 
        <button @click="clear()">清空</button> 
        <hr>
        <input v-model="msg" ref="input_msg">
        <button @click="getRef()">ref获取</button> 
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
       getMsg(){
           alert(this.msg);
       },
       clear(){
           this.msg=""
       },
       getRef(){
          alert(this.$refs.input_msg.value) ;
       }
   } 
}
</script>
