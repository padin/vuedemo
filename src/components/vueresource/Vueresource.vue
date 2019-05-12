<template>
    <div>
        <h2>{{msg}}</h2>
        <button v-on:click="getData()">获取数据</button> 
        <ul>
            <li v-for="i in list">
                <a href="">
                {{i.title}}
                </a>
            </li>
        </ul>
    </div>
</template>

<script>
export default {
   data(){
       return {
           msg:"请求演示",
           list:[]
       }
   },
   methods:{
       getData(){
           var api='http://www.phonegap100.com/appapi.php?a=getPortalList&catid=20&page=1';
           this.$http.get(api).then((response)=>{
                console.log(response.body) 
                this.list = response.body.result
           },(error)=>{
               alert(error);
           })

       },
       
   } 
}
</script>
