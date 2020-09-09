<template>
  <div class="shopCart">
    <van-row class="cartHead" span="4" offset="10" >购物车</van-row>
    <van-row class="mainer">
      <van-card
      num="2"
      tag="标签"
      price="10.00"
      desc="描述信息"
      title="商品标题"
      :thumb="imageURL"
    >
      <view slot="footer">
        <van-button size="mini">按钮</van-button>
        <van-button size="mini">按钮</van-button>
      </view>
    </van-card>
  <van-card
      num="2"
      tag="标签"
      price="10.00"
      desc="描述信息"
      title="商品标题"
      :thumb="imageURL"
    >
      <view slot="footer">
        <van-button size="mini">按钮</van-button>
        <van-button size="mini">按钮</van-button>
      </view>
    </van-card>
      <van-card
      num="2"
      tag="标签"
      price="10.00"
      desc="描述信息"
      title="商品标题"
      :thumb="imageURL"
    >
      <view slot="footer">
        <van-button size="mini">按钮</van-button>
        <van-button size="mini">按钮</van-button>
      </view>
    </van-card>
      <van-card
      num="2"
      tag="标签"
      price="10.00"
      desc="描述信息"
      title="商品标题"
      :thumb="imageURL"
    >
      <view slot="footer">
        <van-button size="mini">按钮</van-button>
        <van-button size="mini">按钮</van-button>
      </view>
    </van-card>
      <van-card
      num="2"
      tag="标签"
      price="10.00"
      desc="描述信息"
      title="商品标题"
      :thumb="imageURL"
    >
      <view slot="footer">
        <van-button size="mini">按钮</van-button>
        <van-button size="mini">按钮</van-button>
      </view>
    </van-card>
      <van-card
      num="2"
      tag="标签"
      price="10.00"
      desc="描述信息"
      title="商品标题"
      :thumb="imageURL"
    >
      <view slot="footer">
        <van-button size="mini">按钮</van-button>
        <van-button size="mini">按钮</van-button>
      </view>
    </van-card>
      <van-card
      num="2"
      tag="标签"
      price="10.00"
      desc="描述信息"
      title="商品标题"
      :thumb="imageURL"
    >
      <view slot="footer">
        <van-button size="mini">按钮</van-button>
        <van-button size="mini">按钮</van-button>
      </view>
    </van-card>
      <van-card
      num="2"
      tag="标签"
      price="10.00"
      desc="描述信息"
      title="商品标题"
      :thumb="imageURL"
    >
      <view slot="footer">
        <van-button size="mini">按钮</van-button>
        <van-button size="mini">按钮</van-button>
      </view>
    </van-card>
      <van-card
      num="2"
      tag="标签"
      price="10.00"
      desc="描述信息"
      title="商品标题"
      :thumb="imageURL"
    >
      <view slot="footer">
        <van-button size="mini">按钮</van-button>
        <van-button size="mini">按钮</van-button>
      </view>
    </van-card>
    </van-row>
  </div>
</template>
<script>
import Vue from "vue";
import { Steps,Row ,Col, Card} from 'vant';
Vue.use(Steps)
Vue.use(Row);
Vue.use(Col);
Vue.use(Card)
export default {
 data(){
   return{
    imageURL:"https://img.yzcdn.cn/vant/cat.jpeg"

   }
 },
 mounted(){
   this.$store.commit("getUserInfo")
  //  console.log(this.$store.state)
 }
}
</script>
<style lang='scss' scoped>
  .shopCart{


    height: 100%;

    .cartHead{
      background: #fff;
      font-size: 16px;
      font-weight: bold;
      padding:.8rem 0;
      position: fixed;
      top: 0;
      width: 100%;
      left: 0;
    }
    .mainer{
     position: fixed;
     top:3rem;
     left: 0;
     background: #f7f7f7;
     height: 86%;
     width: 100%;
      overflow-y: auto;

    }
  }
</style>