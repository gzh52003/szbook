<template>
  <div id="app">
    <div class="main">
      <router-view />
    </div>
    <van-tabbar active-color="#ff1100" inactive-color="#000" route id="nav" :fixed="false">
      <div class="bottomBox" v-if="!this.$route.params.id||this.$route.query.tatle">
        <van-tabbar-item v-for="(item, idx) in Tabbar" :key="idx" :to="item.path">
          <van-icon class="iconfont" class-prefix="icon" :name="item.icon" />
          <div>{{ item.text }}</div>
        </van-tabbar-item>
      </div>
      <div class="bottomBox buyGoods" v-else>
        <div style="line-height:32px;margin:0">
          <p>
            <van-icon name="service-o" />
          </p>
          <p style="line-height:10px">客服</p>
        </div>
        <div style="line-height:50px;color:#bdbdbd">
          <van-icon name="like" />
        </div>
        <div style="line-height:50px">立即购买</div>
        <div style="line-height:50px;background:#f10;color:#fff" @click="addCart">加入购物车</div>
      </div>
    </van-tabbar>
  </div>
</template>

<script>
import "@/assets/iconfont/iconfont.css";
import vanFun from "./vant/comVant";
vanFun();
import Vue from "vue";
import { Tabbar, TabbarItem, Icon, List, PullRefresh } from "vant";
Vue.use(Tabbar);
Vue.use(TabbarItem);
Vue.use(Icon);
Vue.use(List);
Vue.use(PullRefresh);
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
 created() {
    console.log("this.$store.state",this.$store.state)
  },
  methods: {
    addCart() {
      if (localStorage.getItem("userInfo")) {
        const bookName = this.$store.state.currentGoods.name;
        this.$request.get("/goods?bookName=" + bookName).then((res) => {
          const bookInfo = res.data.data[0];
          this.$store.commit("changeUserInfo", bookInfo);
          localStorage.setItem("szbookcarInfo",JSON.stringify(this.$store.state.userInfo.cartInfo))
          this.$request.patch('/goods',{
            username:this.$store.state.userInfo.username,
            cartInfo:this.$store.state.userInfo.cartInfo,
          }).then(res=>{
            // console.log(res);
          })
        });
      } else {
        this.$router.push("/mine");
      }
    },
  },
  watch: {
    "$route.path"() {
      // console.log(this.$route.params);
    },
  },
  // 使用request请求
  // async created() {
  //   const res = await this.$request.get("/goods");
  //   console.log(res);
  //   console.log(this.$router, this.$store);
  // },
};
document.title = "深圳书城";
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
    .main {
      overflow-y: auto;
      height: 94%;
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
      .bottomBox {
        width: 100%;
        height: 100%;
        display: flex;
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
      .buyGoods {
        div {
          width: 25%;
          height: 100%;
          text-align: center;
          font-size: 14px;
          .van-icon {
            font-size: 18px;
          }
          p {
            margin: 0;
          }
        }
      }
    }
  }
}
</style>
