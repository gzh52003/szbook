// 引入模块
import Vue from "vue";
import VueRouter from "vue-router";

// 引入自定义模块
import Home from "../pages/Home.vue";

import User from "../pages/user/User.vue";

import Goods from "../pages/goods/Default.vue";
import GoodsAdd from "../pages/goods/Add.vue";
import GoodsList from "../pages/goods/Goods.vue";

import Order from "../pages/order/Order.vue";
import Reg from "../pages/reg/Reg.vue";
import Login from "../pages/login/Login.vue";
import NotFound from "../pages/NotFound.vue";

// 使用VueRouter
Vue.use(VueRouter);

// 实例化并配置参数
const router = new VueRouter({
  routes: [
    {
      path: "/", // 重定向指向->  /home   改为 reg
      redirect: "/login",
    },
    {
      path: "/home",
      component: Home,
    },
    {
      path: "/user",
      component: User,
    },
    {
      path: "/order",
      component: Order,
    },
    {
      path: "/goods",
      component: Goods,
      children: [
        {
          path: "",
          redirect: "list",
        },
        {
          path: "add",
          component: GoodsAdd,
        },
        {
          path: "list",
          component: GoodsList,
        },
      ],
    },
    {
      path: "/login",
      component: Login,
    },
    {
      path: "/reg",
      component: Reg,
      children: [
        {
          name: "login",
          path: "login",
          component: Login,
        },
      ],
    },
    {
      path: "/404",
      component: NotFound,
    },
    // 前面都没匹配到的这里匹配404页面效果
    {
      path: "*",
      redirect: "/404",
    },
  ],
});
router.beforeEach((to, from, next) => {
  let token = JSON.parse(localStorage.getItem("userInfo")) || {};
  console.log(token);
  if (typeof token == "string") {
    console.log(token);
    let result = fetch(
      `http://42.194.179.50/api/login/check?authorization=${token}`,
      {
        credentials: "include",
      }
    )
      .then((res) => res.json())
      .then((data) => {
        if (data.code == 200) {
          console.log(to.fullPath);
          if (to.fullPath != "/home" && to.fullPath != "/login") {
            next();
          } else if (to.fullPath == "/login") {
            next({ path: "/home" }, next());
          } else {
            next({ path: "/home" }, next());
          }
        } else {
          localStorage.removeItem("userInfo");
          if (to.fullPath != "/login") {
            window.alert("用户登录失效，请重新登录！");
          }
          setTimeout(() => {
            next({ path: "/login" }, next());
          }, 1000);
        }
      });
    console.log(result);
  } else if (to.fullPath == "/reg") {
    console.log(to.fullPath);
    next();
  } else {
    console.log("我是最外层的else");
    next({ path: "/login" }, next());
  }
});
export default router;
