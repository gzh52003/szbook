<template>
  <div class="shopCart">
    <van-row class="cartHead">
      <van-col span="4" offset="10">购物车</van-col>
      <van-col span="2" offset="8">
        <van-icon name="delete"  @click="deleteGoods"/>
      </van-col>
    </van-row>
    <van-row class="mainer">
      <van-empty
      v-if="cartInfolist.length==0"
      class="custom-image"
      image="https://img.yzcdn.cn/vant/custom-empty-image.png"
      description="您的购物车还没有商品哦，赶快去选购吧"
      />
      <van-card
        v-for="(item,idx) in cartInfolist"
        :key="idx"
        num="2"
        tag="标签"
        price="10.00"
        desc="描述信息"
        title="商品标题"
        :thumb="imageURL"
      >
        <template slot="footer">
          <van-stepper
            input-width="3vw"
            button-size="5vw"
            :value="1"
            async-change
            bind:change="onChange"
            integer
          />
        </template>
      </van-card>
    </van-row>
  </div>
</template>
<script>
import Vue from "vue";
import { Steps, Row, Col, Card, Stepper, Empty } from "vant";
Vue.use(Steps);
Vue.use(Row);
Vue.use(Col);
Vue.use(Card);
Vue.use(Empty)
Vue.use(Stepper);
export default {
  data() {
    return {
      
      imageURL: "https://img.yzcdn.cn/vant/cat.jpeg"
    };
  },
  created() {
    // this.cartInfolist=this.$store.state.userInfo.cartInfo
     console.log("this.cartInfo",this.cartInfo)
      // this.$store.commit("addUserInfo");
  },
  computed:{
    cartInfolist(){
      console.log(this.$store.state.userInfo)
      return this.$store.state.userInfo.cartInfo.push({})
    }
  },
  methods:{
    deleteGoods(){

    }
  }
};
</script>
<style lang='scss' scoped>
.shopCart {
  height: 100%;
  .van-card {
    z-index: -2;
    padding-top: 0;
    padding-bottom: 0;
    .van-card__header {
      padding: 0.5vh 0;
    }
    .van-card__footer {
      border-top: 1px solid #f7f7f7;
      padding: 1vh 0;
      position: relative;
      z-index: -1;
    }
  }

  .cartHead {
    background: #fff;
    font-size: 16px;
    font-weight: bold;
    padding: 0.8rem 0;
    position: fixed;
    top: 0;
    width: 100%;
    left: 0;
    border-bottom: 1px solid #f7f7f7;
  }
  .mainer {
    position: fixed;
    top: 3rem;
    left: 0;
    background: #f7f7f7;
    height: 86%;
    width: 100%;
    overflow-y: auto;
  }
}
</style>