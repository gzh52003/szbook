<template>
  <div id="app">
    <div class="main">
      <router-view />
    </div>
    <van-tabbar active-color="#ff1100" inactive-color="#000" route id="nav" :fixed="false">
      <!-- <van-tabbar-item icon="home">
        <van-icon class="iconfont" class-prefix="icon" name="shujiguanli" />
        <div>书城</div>
      </van-tabbar-item>-->
      <van-tabbar-item v-for="(item,idx) in Tabbar" :key="idx" :to="item.path">
        <van-icon class="iconfont" class-prefix="icon" :name="item.icon" />
        <div>{{item.text}}</div>
      </van-tabbar-item>
      <!-- <van-tabbar-item class="iconfont" class-prefix="icon" name="home" to=''>分类</van-tabbar-item>
      <van-tabbar-item icon="search">热点</van-tabbar-item>
      <van-tabbar-item icon="search">购物车</van-tabbar-item>
      <van-tabbar-item icon="setting-o">我的</van-tabbar-item>-->
    </van-tabbar>
  </div>
</template>

<script>
import "@/assets/iconfont/iconfont.css";
import Vue from "vue";
import { Tabbar, TabbarItem, Icon } from "vant";
Vue.use(Tabbar);
Vue.use(TabbarItem);
Vue.use(Icon);
export default {
  data() {
    return {
      Tabbar: [
        { path: "/home", name: "home", icon: "home", badge: 0, text: "书城" },
        {
          path: "/category",
          name: "category",
          icon: "shujiguanli",
          badge: 0,
          text: "类别",
        },
        {
          path: "/hotnews",
          name: "hotNews",
          icon: "tubiao-",
          badge: 0,
          text: "热点",
        },
        {
          path: "/shopcart",
          name: "shopCart",
          icon: "gouwuchezhengpin",
          badge: 0,
          text: "购物车",
        },
        { path: "/mine", name: "mine", icon: "wode", badge: 0, text: "我的" },
      ],
    };
  },
  methods: {},
  // 使用request请求
  // async created() {
  //   const res = await this.$request.get("/goods");
  //   console.log(res);
  //   console.log(this.$router, this.$store);
  // },
};
</script>

<style lang="scss">
html,
body {
  height: 100%;
  #app {
    height: 100%;
    display: flex;
    flex-direction: column;
    overflow: hidden;
    text-align: center;
    .main{
      overflow-y: auto;
      height: 100%;
    }
    #nav {
      padding: 0;
      font-size: 16px;
      a {
        font-weight: bold;
        color: #2c3e50;
        &.router-link-exact-active {
          color: #f00;
        }
      }
      .van-tabbar-item {
        .iconfont {
          font-size: 18px;
        }
        .van-tabbar-item__text {
          line-height: 18px;
          font-size: 12px;
        }
      }
    }
  }
}
</style>
