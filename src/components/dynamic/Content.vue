<template>
  <div>
    {{msg}}
    <h2>{{title}}</h2>
    <div v-html="content"></div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      msg: "this is dynamic Content msg",
      title:"this is dynamic Content componente",
      content:""
    };
  }
  ,methods:{
      getData(aid){
        var api ="http://www.phonegap100.com/appapi.php?a=getPortalArticle&aid="+aid;
        this.$http.get(api).then(
            response => {
                console.log(response);
                this.content = response.body.result[0].content;
                this.title = response.body.result[0].title;
            },
            error => {
                console.log(error);
            }
        );
      }
  }
  ,mounted() {
    //动态路由传值
    var aid = this.$route.params.aid;
    this.getData(aid);
  }
};
</script>
