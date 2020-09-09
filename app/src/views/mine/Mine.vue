<template>
  <div class="mineMain">
    <van-row class="userInfos">
      <van-row>
        <van-col span="6">
          <van-image round width="10vh" height="10vh" src="https://img.yzcdn.cn/vant/cat.jpeg" />
        </van-col>
        <van-col span="2" offset="14">
          <i class="iconfont icon-lingdang"></i>
        </van-col>
        <van-col span="2">
          <i class="iconfont icon-icon-test"></i>
        </van-col>
      </van-row>
      <van-row class="count">
        <van-col span="6">
          <span class="num">0</span>
          <span>智慧卡</span>
        </van-col>
        <van-col span="6">
          <span class="num">0</span>
          <span>会员积分</span>
        </van-col>
        <van-col span="6">
          <span class="num">0</span>
          <span>优惠券</span>
        </van-col>
        <van-col span="6">
          <span class="num">0</span>
          <span>团体会员</span>
        </van-col>
      </van-row>
    </van-row>
    <van-row class="quotes">
      <van-row style="background:#fff7df;padding:2vh;">
        <van-col style="margin-bottom:1vh;" offset="2">所有的大人都曾经是小孩，虽然，只有少数人记得</van-col>
        <van-col offset="12">——安托万·德·圣·埃克苏佩里</van-col>
      </van-row>
    </van-row>
    <van-row class="orderInfos">
      <van-row class="info1">
        <van-col span="6">我的订单</van-col>
        <van-col span="3" offset="14" class="more">更多</van-col>
      </van-row>
      <van-row class="info2">
        <van-col span="6">
          <i class="iconfont icon-qianbao"></i>
          <p>待付款</p>
        </van-col>
        <van-col span="6">
          <i class="iconfont icon-tubiaolunkuo-"></i>
          <p>待发货</p>
        </van-col>
        <van-col span="6">
          <i class="iconfont icon-daifahuo"></i>
          <p>已发货</p>
        </van-col>
        <van-col span="6">
          <i class="iconfont icon-shouhou"></i>
          <p>退款/售后</p>
        </van-col>
      </van-row>
    </van-row>
    <van-row class="fav">
      <van-row class="info1">
        <van-col span="6">收藏</van-col>
        <van-col span="3" offset="14" class="more">更多</van-col>
      </van-row>
      <van-row>
        <van-panel title="商品" desc="没有收藏商品">
          <view>内容</view>
        </van-panel>
        <van-panel title="商家" desc="没有收藏商家">
          <view>内容</view>
        </van-panel>
      </van-row>
    </van-row>
    <van-row class="askOrAnswer">
      <van-row class="info1">
        <van-col span="6">我的问答</van-col>
        <van-col span="3" offset="14" class="more">更多</van-col>
      </van-row>
      <van-row>
        <van-panel title="我的问答" desc="没有任何问答">
          <view>内容</view>
        </van-panel>
      </van-row>
    </van-row>
    <van-overlay :show="show">
      <div class="wrapper" @click.stop>
        <div class="block">
          <Login v-if="showLogin" :showLogin="showLogin" :showReg="showReg" @gotoReg="goto"></Login>
          <Reg v-if="showReg" :showLogin="showLogin" :showReg="showReg" @gotoLogin="goto"></Reg>
        </div>
      </div>
    </van-overlay>
  </div>
</template>

<script>
import Vue from "vue";
import { Overlay, Skeleton, Row, Col, Image, Panel } from "vant";
import Login from "./Login";
import Reg from "./Reg";
Vue.use(Overlay);
Vue.use(Skeleton);
Vue.use(Row);
Vue.use(Col);
Vue.use(Image);
Vue.use(Panel);
export default {
  data() {
    return {
      show: true,
      showLogin: true,
      showReg: false
    };
  },
  created() {
    // this.getVcode();
    //判断token
    let token = localStorage.getItem("userInfo");
    if (token) {
      //token存在，先不弹wrapper
      this.show = false;
      //然后发送请求到后端校验接口，校验通过则不弹wrapper
      token = token.split("");
      token.pop();
      token.shift();
      // token=token.unshift()
      token = token.join("");
      console.log(token);
      fetch(`http://42.194.179.50/api/login/check?authorization=${token}`)
        .then(res => res.json())
        .then(res => {
          if (res.code == 0) {
            //token过期或者被串改，弹wrapper
            this.show = true;
          } else {
            this.show = false;
          }
        });
    } else {
      //token不存在，弹wrapper
      this.show = true;
    }
  },
  methods: {
    goto(login, reg) {
      this.showLogin = login;
      this.showReg = reg;
    }
  },
  components: {
    Login,
    Reg
  }
};
</script>
<style lang='scss' >
.mineMain {
  height: 100%;
  overflow: auto;
  background: rgba(0, 0, 0, 0.05);
}
.userInfos {
  margin: 0 auto;
  padding: 4vh 2vh 1.2vh 2vh;
  // margin-top: 2vh;
  background: #fff;
  .iconfont {
    font-size: 20px;
    line-height: 10vh;
  }
  .count {
    margin-top: 3vh;
    span {
      display: block;
      font-size: 14px;
      color: grey;
    }
    .num {
      color: red;
      font-size: 18px;
      font-weight: bold;
    }
  }
}
.quotes {
  font-size: 12px;
  // background: rgba(0, 0, 0, 0.05);
  padding: 1.2vh 0;
}
.orderInfos {
  background: #fff;
  padding-top: 1vh;
  .info2 {
    font-size: 12px;
    .iconfont {
      font-size: 26px;
    }
  }
}
.fav ,.askOrAnswer{
  background: #fff;
  margin: 1vh 0;
  padding-top: 1vh;
}
.info1 {
  font-size: 16px;
  margin-bottom: 2vh;
  margin-left: 2vh;
  text-align: left;
  .more {
    font-size: 12px;
    text-align: right;
    margin-right: 5px;
  }
}
.wrapper {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  font-family: -apple-system, BlinkMacSystemFont, "Helvetica Neue", Helvetica,
    Segoe UI, Arial, Roboto, "PingFang SC", "Hiragino Sans GB",
    "Microsoft Yahei", sans-serif;
  .gotoReg {
    font-size: 12px;
  }
}

.block {
  width: 85%;
  height: 65%;
  background-color: #fff;
  .closeWrapper {
    float: right;
    margin: 1vh;
  }
  .info {
    width: 80%;
    margin: 0.6vh auto;
  }
  .verify {
    width: 35vw;
    float: left;
    transform: translateX(8vw);
  }
  .svgVcodeBox {
    width: 20vw;
    height: 5vh;
    overflow: hidden;
    float: right;
    margin-right: 8vw;
    margin-top: 1vh;
    #svgVcode {
      svg,
      rect,
      path {
        display: inline-block;
        width: 20vw;
        height: 10vh;
        background: #58bc58;
        vertical-align: bottom;
        transform: translateY(-2vh) translateX(-0.5vh) scale(1.1);
      }
    }
  }
  .van-field {
    border-bottom: 1px black solid;
    opacity: 0.8;
    .van-cell__title {
      width: 14vw;
    }
  }
  .agree {
    font-size: 12px;
    width: 65vw;
    margin: 0 auto;
    opacity: 0.8;
  }
  .logo {
    width: 30vw;
    transform: translateX(10%);
    margin-top: 6vh;
    margin-bottom: 3vh;
  }
}
</style>