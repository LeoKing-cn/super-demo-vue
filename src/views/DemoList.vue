<template>
  <div class="container">
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/demoList">demo list</router-link>
    </div>
     <div class="section1">
      <div class="title"><router-link to="/project/v1">项目启动</router-link></div>
    </div>
    <div class="section1">
      <div class="title">html 全量测试</div>
      <div class="block">
        <div class="item">
          <router-link to="/html/v1">html 全量测试</router-link>
        </div>
      </div>
    </div>
    <div class="section1">
      <div class="title">css布局方式</div>
      <div class="block">
        <div class="item">flex 布局</div>
        <div class="item">float 布局</div>
        <div class="item">响应式布局</div>
        <div class="item">单栏布局</div>
      </div>
    </div>
    <div class="section1">
      <div class="title">css3 全量测试</div>
      <div class="block"></div>
    </div>
    <div class="section1">
      <div class="title">vue组件demo</div>
      <div class="block"></div>
    </div>
    <div class="section1">
      <div class="title">vue2全量功能</div>
      <div class="block"></div>
    </div>
    <div class="section1">
      <div class="title">vue3全量功能</div>
      <div class="block"></div>
    </div>
    <div class="section1">
      <div class="title">第三方UI测试</div>
      <div class="block">
        <div class="item">element</div>
        <div class="item">ant design vue</div>
        <div class="item">mint</div>
        <div class="item">vant</div>
      </div>
    </div>
    <div class="section1">
      <div class="title">第三方js库测试</div>
      <div class="block"></div>
    </div>
    <div class="section1">
      <div class="title">webpac打包工具</div>
      <div class="block"></div>
    </div>
    <div class="section1">
      <div class="title">npm工具</div>
      <div class="block"></div>
    </div>
    <div class="section1">
      <div class="title">http请求测试</div>
      <div class="block">
        <div class="item">axios</div>
        <div class="item">fetch</div>
      </div>
    </div>
    <div class="section1">
      <div class="title">vue router</div>
      <div class="block">
        <div class="item">  <router-link to="/router/v1">嵌套路由</router-link></div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "DemoList",
  data() {
    return {};
  },
  props: {},
};
</script>
<style lang="less" scoped>
.container {
  height: 100%;
  padding: 20px;
  .section1 {
    width: 100%;
    height: 100%;
    margin-bottom: 20px;
    .title {
      width: 100%;
      display: flex;
      flex-direction: row;
      font-size: 20px;
      font-weight: bold;
    }
    .block {
      display: flex;
      flex-direction: row;
      flex-wrap: wrap;
      justify-content: flex-start;
      align-items: flex-start;
      align-content: flex-start;
      margin-top: 20px;
      .item {
        margin-right: 20px;
        cursor: pointer;
      }
    }
  }
}
</style>

