// 引入模块
import Vue from 'vue'
import VueRouter from 'vue-router'

// 引入自定义模块
import Home from '../pages/Home.vue'

import User from '../pages/user/Default.vue'
import UserList from '../pages/user/List.vue'
import UserAdd from '../pages/user/Add.vue'

import Order from '../pages/order/Order.vue'
import Goods from '../pages/goods/Goods.vue'
import Reg from '../pages/reg/Reg.vue'
import Login from '../pages/login/Login.vue'
import NotFound from '../pages/NotFound.vue'

// 使用VueRouter
Vue.use(VueRouter)

// 实例化并配置参数
const router = new VueRouter({
  routes: [
    {
      path: '/', // 重定向指向->  /home
      redirect: '/home'
    },
    {
      path: '/home',
      component: Home
    },
    {
      path: '/user',
      component: User,
      children: [
        // 进入用户管理页面直接跳到用户列表
        {
          path: '',
          redirect: 'list'
        }, {
          path: 'add',
          component: UserAdd
        }, {
          path: 'list',
          component: UserList
        }]
    },
    {
      path: '/order',
      component: Order
    },
    {
      path: '/goods',
      component: Goods
    },
    {
      path: '/login',
      component: Login
    },
    {
      path: '/reg',
      component: Reg
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

export default router;
