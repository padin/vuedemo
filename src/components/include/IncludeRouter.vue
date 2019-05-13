<template>
  <div>
    <h2>{{title}}</h2>
    {{msg}}
    <v-user></v-user>
  </div>
</template>

<script>
import User from "./User.vue";
export default {
  data() {
    return {
      msg: "this is a includerouter msg",
      title: "演示嵌套路由"
    };
  },
  components: {
    "v-user": User
  },
  methods: {}
};
</script>

<style>
</style>

