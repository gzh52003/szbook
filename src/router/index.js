// 引入模块
import Vue from 'vue'
import VueRouter from 'vue-router'

// 引入自定义模块
import Home from '../pages/Home.vue'

import User from '../pages/user/User.vue'

import Goods from '../pages/goods/Default.vue'
import GoodsAdd from '../pages/goods/Add.vue'
import GoodsList from '../pages/goods/Goods.vue'

import Order from '../pages/order/Order.vue'
import Reg from '../pages/reg/Reg.vue'
import Login from '../pages/login/Login.vue'
import NotFound from '../pages/NotFound.vue'

// 使用VueRouter
Vue.use(VueRouter)

// 实例化并配置参数
const router = new VueRouter({
  routes: [
    {
      path: '/', // 重定向指向->  /home   改为 reg
      redirect: '/login'
    },
    {
      path: '/home',
      component: Home
    },
    {
      path: '/user',
      component: User,
     
    },
    {
      path: '/order',
      component: Order
    },
    {
      path: '/goods',
      component: Goods,
      children: [
        {
          path: '',
          redirect: 'list'
        }, {
          path: 'add',
          component: GoodsAdd
        }, {
          path: 'list',
          component: GoodsList
        }]
    },
    {
      path: '/login',
      component: Login
    },
    {
      path: '/reg',
      component: Reg,
      children: [
        {
          name:"login",
          path: 'login',
          component: Login
        }]
    },
    {
      path: '/404',
      component: NotFound
    },
    // 前面都没匹配到的这里匹配404页面效果
    {
      path: '*',
      redirect: '/404'
    }
  ]
})
router.beforeEach((to, from, next) => {
  let token = JSON.parse(localStorage.getItem("userInfo")) || {}
  if(token[0]){
    console.log(111);
    if(to){
      next()
    }else{
      next({path:"/home"},next())
    }
  }else if(to.fullPath=="/reg"){
    console.log(to.fullPath);
    next();
  }else{
    next({path:"/login"},next());
  }
})
export default router
