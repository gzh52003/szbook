import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    // component: Home,
    redirect: "/home",
  },
  {
    path: "/home",
    name: "Home",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/Home.vue"),
  },
  {
    path: "/shopcart",
    name: "ShopCart",
    component: () => import("../views/shopcart/ShopCart.vue"),
  },
  {
    path: "/category",
    name: "Category",
    component: () => import("../views/category/Category.vue"),
  },
  {
    path: "/goodslist/:id",
    name: "GoodsList",
    component: () => import("../views/category/GoodsList.vue"),
  },
  {
    path: "/goods",
    name: "Goods",
    component: () => import("../views/category/Goods.vue"),
  },
  {
    path: "/hotnews",
    name: "HotNews",
    component: () => import("../views/hotnews/HotNews.vue"),
  },
  {
    path: "/shopcart",
    name: "ShopCart",
    component: () => import("../views/shopcart/ShopCart.vue"),
  },
  {
    path: "/mine",
    name: "Mine",
    component: () => import("../views/mine/Mine.vue"),
  },
  {
    path: "/reg",
    name: "Reg",
    component: () => import("../views/mine/Reg.vue"),
  },
  {
    path: "/login",
    name: "Login",
    component: () => import("../views/mine/Login.vue"),
  },
  {
    path: "*",
    name: "404",
    component: () => import("../Default.vue"),
  },
];

const router = new VueRouter({
  mode:'history',
  routes
})

export default router;
