<template>
    
    <div>
        {{msg}}
        <br>
        {{this.$store.state.count}}x2={{this.$store.getters.computedCount}}
        <br>
        <button @click="change()">+</button>
        <ul>
            <li v-for = 'i in list'>
                {{i.title}}
            </li>
        </ul>
    </div>
</template>

<script>
import store from './store.js'
export default {
   data(){
       return {
           msg: '演示vuex',
           todo:'',
           list:[]
       }
   } 
   ,store
   ,methods:{
       change(){
           // 异步
           this.$store.dispatch('incMutationCount');
       }
   }
   ,mounted(){
       this.list = this.$store.state.list;
       console.log(this.list)
   }
}
</script>

<style>
  
</style>

