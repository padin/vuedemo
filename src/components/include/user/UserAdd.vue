<template>
  <!-- 所有的内容要被根节点包含起来 -->
  <div id="userAdd">
    {{msg}}
  </div>
</template>


<script>
export default {
  data() {
    return {
      msg: "我是一个userAdd组件"
    };
  }
};
</script>
