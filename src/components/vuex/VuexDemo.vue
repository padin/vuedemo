<template>
  <div>
    {{msg}}
    <br>
    {{this.$store.state.count}}
    <br>
    <button @click="change()">+</button>
  </div>
</template>

<script>
import store from "./store.js";
export default {
  data() {
    return {
      msg: "演示vuex",
      todo: "",
      list: []
    };
  },
  // 注册属性
  store,
  methods: {
    change() {
      this.$store.commit("inccount");
    },
    getData() {
      var api =
        "http://www.phonegap100.com/appapi.php?a=getPortalList&catid=20&page=1";
      this.$http.get(api).then(
        response => {
          this.$store.commit("addList",response.body.result);
        },
        error => {
          alert(error);
        }
      );
    }
  },
  mounted() {
     this.getData();
    //  console.log(this.list)
  }
};
</script>

<style>
</style>

