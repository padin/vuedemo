<template>
    <div>
        {{msg}}
        <button @click="chanageData()">changeData</button>
    </div>
</template>

<script>
export default {
   data(){
       return {
           msg:"我是一个子组件",
           todo:'',
           list:[]
       }
   } 
   ,methods:{
        chanageData(){
            this.msg=this.msg+'!'
        }
   },
   beforeCreate(){
       alert("组件创建前");
   }
   ,created(){
       alert("组件创建后");
   }
   ,beforeMount(){
       alert("组件挂载前");
   }
   ,mounted(){
       alert("组件挂载后");
   }
   ,beforeUpdate(){
       alert("数据改变前");
   }
   ,updated(){
       alert("数据改变后");
   }
   ,beforeDestroy(){
       alert("组件销毁前");
   }
   ,destroyed(){
       alert("组件销毁后");
   }



}
</script>

<style>
  
</style>

