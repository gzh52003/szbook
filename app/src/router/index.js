import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    // component: Home,
    redirect: "/home",
  },
  {
    path: "/home",
    name: "Home",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    meta: {
      keepAlive: true,
    },
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/Home.vue"),
  },
  {
    path: "/shopcart",
    name: "ShopCart",
    component: () => import("../views/shopcart/ShopCart.vue"),
    meta: {
      keepAlive: false,
    },
  },
  {
    path: "/category",
    name: "Category",
    meta: {
      keepAlive: true,
    },
    component: () => import("../views/category/Category.vue"),
  },
  {
    path: '/goodslist/:id',
    name: 'GoodsList',
    meta: {
      keepAlive: false,
    },
    component: () => import('../views/category/GoodsList.vue')
  },
  {
    path: "/goods/:id",
    name: "Goods",
    meta: {
      keepAlive: false,
    },
    component: () => import("../views/category/Goods.vue"),
  },
  {
    path: "/hotnews",
    name: "HotNews",
    meta: {
      keepAlive: false,
    },
    component: () => import("../views/hotnews/HotNews.vue"),
  },
  {
    path: "/shopcart",
    name: "ShopCart",
    meta: {
      keepAlive: false,
    },
    component: () => import("../views/shopcart/ShopCart.vue"),
  },
  {
    path: "/mine",
    name: "Mine",
    meta: {
      keepAlive: false,
    },
    component: () => import("../views/mine/Mine.vue"),
  },
  {
    path: "/reg",
    name: "Reg",
    meta: {
      keepAlive: false,
    },
    component: () => import("../views/mine/Reg.vue"),
  },
  {
    path: "/login",
    name: "Login",
    meta: {
      keepAlive: true,
    },
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
  routes,
  scrollBehavior(to,form,savedPosition){
    //scrollBehavior方法接收to，form路由对象
    //第三个参数savedPosition当且仅当在浏览器前进后退按钮触发时才可用
    //该方法会返回滚动位置的对象信息，如果返回false，或者是一个空的对象，那么不会发生滚动
    //我们可以在该方法中设置返回值来指定页面的滚动位置，例如：
     //return {x:0,y:0}
    //表示在用户切换路由时让是所有页面都返回到顶部位置
    //如果返回savedPosition,那么在点击后退按钮时就会表现的像原生浏览器一样，返回的页面会滚动过到之前按钮点击跳转的位置，大概写法如下：
     if(savedPosition){
        return savedPosition
     }else{
       return {x:0,y:0}
     }
     //如果想要模拟滚动到锚点的行为:
    //  if(to.hash){
    //    return {
    //      selector:to.hash
    //    }
    //  }
 }
});

export default router;
