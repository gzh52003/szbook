<template>
  <div id="orderModule">
    <van-row class="cartHead">
      <van-col span="4" offset="10">{{text}}</van-col>
      <van-col span="2" offset="8">
        <slot name="headerIcon"></slot>
      </van-col>
    </van-row>
    <van-row class="mainer">
      <slot name="content"></slot>
    </van-row>
  </div>
</template>
<script>

import Vue from "vue";
import {
  Steps,
  Row,
  Col,
  Card,
  Stepper,
  Empty,
  Checkbox,
  SubmitBar,
  Dialog,
  Notify
} from "vant";
Vue.use(Steps);
Vue.use(Row);
Vue.use(Col);
Vue.use(Card);
Vue.use(Empty);
Vue.use(Stepper);
Vue.use(Checkbox);
Vue.use(SubmitBar);
Vue.use(Dialog);
Vue.use(Notify);
export default {
    props:["text"],
    data() {
    return {

    };
  },
}
</script>
<style lang="scss">
#orderModule {
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
//   z-index: -1;
  .van-card {
    z-index: 1;
    padding-top: 0;
    padding-bottom: 0;
    border: 1px solid rgba(0,0,0,.1);
    .van-card__content {
      max-width: 55vw;
      margin-left: 8vw;
    }
    .van-card__header {
      padding: 0.5vh 0;
    }
    .van-card__footer {
      border-top: 1px solid #f7f7f7;
      padding: 1vh 0;
      position: relative;
      z-index: -1;
    }
    // .van-image {
    //   transform: translateX(6vw);
    // }
    .van-radio {
      margin-top: 50%;
      margin-left: -1.6vw;
    }
    .van-submit-bar {
      margin-bottom: 7vh;
    }
  }

  .cartHead {
    background: #fff;
    font-size: 16px;
    font-weight: bold;
    padding: 0.8rem 0;
    z-index: 1;
    border-bottom: 1px solid #f7f7f7;
  }
  .mainer {
    background: #f7f7f7;
    height: 100%;
    overflow-y: auto;
  }
  .van-submit-bar {
    position: static;
  }
}
</style>>