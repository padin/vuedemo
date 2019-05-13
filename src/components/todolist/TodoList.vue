<template>
    
    <div>
      <input v-model='todo' @keydown="doAdd($event)">
     

      <h2>进行中</h2>
      <hr>
      <ul>
          <li v-for="(i,k) in list" v-if="!i.checked">
              <input type="checkbox" v-model="i.checked" @change="doUpdate()" > 
              {{i.title}}
              <button @click="doDel()">-</button>
          </li>
      </ul>
      <h2>已完成</h2>
      <hr>
      <ul>
          <li v-for="(i,k) in list" v-if="i.checked" >
              <input type="checkbox" v-model="i.checked" @change="doUpdate()">
              {{i.title}}
              <button @click="doDel(k)">-</button>
          </li>
      </ul>

    </div>
</template>

<script>
import storage from './storage.js'
export default {
   data(){
       return {
           todo:'',
           list:[]
       }
   } 
   ,methods:{
       doAdd(e){
           console.log("aaa"+e.keyCode)
           if(e.keyCode==13){
                this.list.push({title:this.todo,checked:false})
                storage.set('list',this.list)
                this.todo = ''
           }
       }
       ,doDel(k){
           this.list.splice(k,1)
           storage.remove('list')
       }
       ,doUpdate(){
            storage.set('list',this.list)
       }
   },
   mounted(){
      var list = storage.get('list') ;
      if(list){
        this.list = list;
      }
   }
}
</script>

<style>
  
</style>

