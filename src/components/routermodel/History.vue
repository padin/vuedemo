<template>
  <div>
    {{title}}
    <h2>{{msg}}</h2>
    <button v-on:click="toNewContent()">编程式路由</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      title: "this is history component",
      msg: "this is history msg"
    };
  },
  methods: {
    toNewContent() {
       this.$router.push({path:"/dynamicContent/302"})
    //    this.$router.push({path:"/dynamicPContent/?aid="+302})
    }
  }
};
</script>
