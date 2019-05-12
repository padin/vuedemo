<template>
    <div>
        {{title}}
        <br>
        {{msg}}
    </div>
</template>

<script>
export default {
   data(){
       return {
           msg:"我是一个子组件",
       }
   } 
   ,methods:{
        chanageData(){
            this.msg=this.msg+'!'
        }
        ,show(){
            alert("这是子组件的方法")
        }
    }
    //这里接受父组件传过来的值
   ,props:['title']




}
</script>

<style>
  
</style>

