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
      <!--  -->
      <van-card
        v-for="(item,idx) in cartInfolist"
        :key="idx"
        :num="item.num"
        class="van-multi-ellipsis--l2"
        :price="item.book.line_price"
        :desc="item.book.desc"
        :title="item.book.bookName"
        :thumb="`./images/szbookApp/${item.book.img}`"
      >
        <template slot="footer">
          <span style="vertical-align:middle;float:left" >总价：￥{{perTotalPrice(item)}}</span>
          <van-stepper
            input-width="3vw"
            button-size="5vw"
            :value="item.num"
            style="display:inline-block"
            @change="onChange($event,item.book.bookName)"
            integer
          />
        </template>
        <template slot="tag">
              <van-checkbox
            checked-color="#000"
            icon-size="18px"
            class="agree"
            v-model="item.checked"
            @change="changeCheck(item.checked,item.book.bookName)"
          ></van-checkbox>
        </template>
      </van-card>
    </van-row>
    <van-submit-bar :price="totalPrice*100" button-text="提交订单" @submit="onSubmit">
      <van-checkbox v-model="checkAll" >全选</van-checkbox>
      <!-- v-model="checkAll" -->
    </van-submit-bar>
  </div>
</template>
<script>
import Vue from "vue";
import { Steps, Row, Col, Card, Stepper, Empty,Checkbox, SubmitBar } from "vant";
Vue.use(Steps);
Vue.use(Row);
Vue.use(Col);
Vue.use(Card);
Vue.use(Empty)
Vue.use(Stepper);
Vue.use(Checkbox);
Vue.use(SubmitBar)
export default {
  data() {
    return {
      checked:false,
      imageURL: "https://img.yzcdn.cn/vant/cat.jpeg"
    };
  },

  computed:{
    cartInfolist(){return this.$store.state.userInfo.cartInfo},
    totalPrice(){return this.$store.getters.totalPrice},
    checkAll:{
      get(){
        return this.$store.state.userInfo.cartInfo.every(item=>item.checked);
      },
      set(val){
        this.$store.state.userInfo.cartInfo = this.$store.state.userInfo.cartInfo.map(item=>{
          item.checked = val;
          return item;
        });

      }
    },
  },
  methods:{
    perTotalPrice(item){
      let linePrice= item.book.line_price.split("")
        linePrice.shift()
        linePrice=parseFloat(linePrice.join(""));
        return (linePrice*item.num).toFixed(2)
    },
    changeCheck(ischeck,bookName){
      this.$store.commit("changeCheck",{ischeck,bookName})
       // 更新localStorage
      localStorage.setItem("szbookcarInfo",JSON.stringify(this.$store.state.userInfo.cartInfo))

    },
    deleteGoods(){
       this.$store.commit("deleteGood")
    },
    onSubmit(){
      console.log("submit")
    },
    onChange(willNum,bookName){
      // console.log("event",willNum)
      this.$store.commit("changeGoodNum",{willNum,bookName})
      // console.log("store",this.$store.state.userInfo.cartInfo)
      // 更新localStorage
      localStorage.setItem("szbookcarInfo",JSON.stringify(this.$store.state.userInfo.cartInfo))
      // 更新数据库
      this.$request.patch('/goods',{
            username:this.$store.state.userInfo.username,
            cartInfo:this.$store.state.userInfo.cartInfo,
          }).then(res=>{
            // console.log(res);
          })

    }

  }
};
</script>
<style lang='scss' scoped>
.shopCart {
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  z-index: -1;
  .van-card {
    z-index: 1;
    padding-top: 0;
    padding-bottom: 0;
    .van-card__content{
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
    .van-image{
        transform: translateX(6vw);
    }
    .van-radio{
      margin-top:50%;
      margin-left: -1.6vw;
    }
    .van-submit-bar{
      margin-bottom: 7vh;
    }
  }

  .cartHead {
    background: #fff;
    font-size: 16px;
    font-weight: bold;
    padding: 0.8rem 0;
    border-bottom: 1px solid #f7f7f7;
  }
  .mainer {
    background: #f7f7f7;
    height: 100%;
    overflow-y: auto;
  }
  .van-submit-bar{
    position:static;
  }
}
</style>