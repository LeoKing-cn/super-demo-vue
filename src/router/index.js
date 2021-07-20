import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import Layout1 from "@/components/layouts/layout1";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home
  },
  {
    path: "/demoList",
    name: "DemoList",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/DemoList.vue")
  },
  // 项目启动
  {
    path: "/project",
    name: "project",
    component: Layout1,
    children: [
      {
        path: "v1",
        component: () => import("../views/project/v1.vue")
      }
    ]
  },
  // html
  {
    path: "/html",
    name: "html",
    component: Layout1,
    children: [
      {
        path: "v1",
        component: () => import("../views/html/v1.vue")
      }
    ]
  },
  // router
  {
    path: "/router",
    name: "router",
    component: Layout1,
    children: [
      {
        path: "v1",
        component: () => import("../views/router/v1.vue")
      }
    ]
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

// 路由前置守卫
router.beforeEach((to, from, next) => {
  // ...
  console.log(to, "to");
  console.log(from, "from");
  next();
});

// 全局后置钩子
router.afterEach((to, from) => {
  // ...
  next();
});

export default router;
