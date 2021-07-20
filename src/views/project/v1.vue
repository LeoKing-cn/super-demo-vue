<template>
  <div class="container">
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/demoList">demo list</router-link>
    </div>
    <div class="section1">
      <p>1.安装vue cli</p>
      <p>npm install -g @vue/cli</p>
      <p># OR</p>
      <p>yarn global add @vue/cli</p>
      <p>2.创建项目</p>
      <p>vue create super-demo-vue</p>
      <p>3.npm install 安装依赖</p>
      <p>4.npm run serve启动项目</p>
      <p>5.开始改造项目</p>
      <p>6. 去除.eslintrc.js中的'@vue/standard' 不然一直检测报错</p>
      <p>7.安装less  npm install less --save </p>
      <p>npm install less less-loader --save 要注意less-loader版本过高会报错</p>
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