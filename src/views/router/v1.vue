<template>
  <div class="container">
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/demoList">demo list</router-link>
    </div>
    <div class="section1">
      <p>vue路由很简单,其实就几点。</p>
      <p>第一个是动态路由</p>
      <p>第一个是嵌套路由</p>
       <p>第一个是编程式路由</p>
    </div>
  </div>
</template>
<script>
export default {
  name: "v1",
  data() {
    return {};
  },
};
</script>
<style lang="less" scoped>
.container {
  height: 100%;
  padding: 20px;
  .section1 {
    text-align: left;
  }
}
</style>