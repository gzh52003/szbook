<template>
  <div class="home">
    <div class="topBar">
      <van-tabs line-width="30px">
        <van-tab
          v-for="(item,idx) in navbar"
          :title="item.navtext"
          :key="idx"
          color="#f10"
          :url="item.link_to"
        ></van-tab>
      </van-tabs>
    </div>
    <div class="mainContent">
      <van-swipe :autoplay="300000" indicator-color="white">
        <van-swipe-item>
          <img src="../assets/img/banner/cb.jpg"/>
        </van-swipe-item>
        <van-swipe-item>
          <img src="../assets/img/banner/me.jpg"/>
        </van-swipe-item>
        <van-swipe-item>
          <img src="../assets/img/banner/jm.jpg"/>
        </van-swipe-item>
        <van-swipe-item>
          <img src="../assets/img/banner/zq.jpg"/>
        </van-swipe-item>
        <van-swipe-item>
          <img src="../assets/img/banner/sn.jpg"/>
        </van-swipe-item>
        <van-swipe-item>
          <img src="../assets/img/banner/hd.jpg"/>
        </van-swipe-item>
      </van-swipe>
      <div style="height:300px;background:#999">aasdasd</div>
      <div style="height:300px;background:#999">aasdasd</div>
      <div style="height:300px;background:#999">aasdasd</div>
      <div style="height:300px;background:#999">aasdasd</div>
    </div>
  </div>
</template>

<script>
import Vue from "vue";
import { Tabs, Tab , Swipe, SwipeItem } from "vant";
Vue.use(Tab);
Vue.use(Tabs);
Vue.use(Swipe);
Vue.use(SwipeItem);

export default {
  name: "Home",
  data() {
    return {
      navbar: [
        { navtext: "首页", link_to: "" },
        { navtext: "爆品", link_to: "" },
        { navtext: "热卖", link_to: "" },
        { navtext: "手机", link_to: "" },
        { navtext: "零食", link_to: "" },
        { navtext: "文创", link_to: "" },
      ],
    };
  },
  components: {},
  created() {},
};
document.title = "深圳书城";
</script>

<style lang="scss" scope>
.home {
  display: flex;
  flex-direction: column;
  height: 100%;
  .topBar {
  }
  .mainContent {
    width: 100%;
    overflow-x: hidden;
    .van-swipe-item {
      width: 100%;
      height: 180px;
      object-fit: cover;
        line-height: 180px;
      img {
        width: 100%;
      }
    }
  }
}
</style>
