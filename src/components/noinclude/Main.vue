<template>
    <div>
        {{title}}
        <div style="border:1px solid #000">
        <v-home></v-home>
        </div>
        <div style="border:1px solid #000">
        <v-news></v-news>
        </div>
    </div>
</template>

<script>
import Home from './Home.vue'
import News from './News.vue'
export default {
   data(){
       return {
           title:"this is main component",
           msg:"this is main msg",
       }
   }
   ,components:{
       'v-home':Home,
       'v-news':News
   }
}
</script>
