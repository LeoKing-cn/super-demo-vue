<template>
  <div class="container">
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/demoList">demo list</router-link>
    </div>
    <div class="section1">
      <div class="block1">超级demo-vue</div>
      <div class="block2">
        超级demo-vue，旨在讲vue相关的技术写成demo，方便后续复制粘贴。
      </div>
      <div class="block3">大家可以随意复制，而不需要担心版权问题。</div>
      <div class="block4">欢迎大家投稿</div>
    </div>
    <div class="section2"></div>
  </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: "DemoList",
  components: {},
};
</script>
<style lang="less" scoped>
.container {
  position: relative;
  width: 100%;
  height: 100%;
  .section1 {
    width: 50%;
  }
  .section2 {
    width: 50%;
  }
}
</style>
