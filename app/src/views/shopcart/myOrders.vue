<template>
  <order-module text="已下单">
    <template v-slot:content>
      <van-list v-model="loading" :finished="finished" finished-text="没有更多了" @load="onLoad">
        <van-cell v-for="(OrderItem,Oidx) in orderList" :key="Oidx">
          <template>
            <van-collapse v-model="activeName" @click="setName(OrderItem.add_time)">
              <van-collapse-item :name="OrderItem.add_time">
                <template v-slot:title>
                  <div>{{`下单时间：${OrderItem.add_time}`}}</div>
                </template>
                <van-card
                  v-for="(DetailsItem,Didx) in OrderItem.details"
                  :key="Didx"
                  class="van-multi-ellipsis--l2"
                  :title="DetailsItem.bookName"
                  thumb="http://www.ihuanu.cn/szbook/app/bookicon.jpg"
                  :desc="DetailsItem.desc"
                >
                  <template v-slot:footer>
                    <span style="vertical-align:middle;float:left">单价：{{DetailsItem.line_price}}</span>
                    <span style="vertical-align:middle;float:right">商品总数：{{DetailsItem.buynum}}</span>
                  </template>
                </van-card>
                <van-row class="orderFooter">
                  <van-col offset="0">订单总价：￥{{OrderItem.totalPrice}}</van-col>
                </van-row>
              </van-collapse-item>
            </van-collapse>
          </template>
        </van-cell>
      </van-list>
    </template>
  </order-module>
</template>
<script>
import Vue from "vue";
import orderModule from "./orderModule";
import { List, Cell, Collapse, CollapseItem } from "vant";
Vue.use(List);
Vue.use(Cell);
Vue.use(Collapse);
Vue.use(CollapseItem);
export default {
  data() {
    return {
      orderList: [],
      detailList: [],
      loading: false,
      finished: false,
      activeName: []
    };
  },
  // created() {
  //   this.$request
  //     .get(
  //       "/order/personal?username=" +
  //         this.$store.state.userInfo.username +
  //         "&finished=false"
  //     )
  //     .then(res => {
  //       this.detailList = res.data.data;

  //       console.log("detailList", this.detailList);
  //     });
  // },
  methods: {
    setName(add_time){
      console.log("add_time",add_time)
    },
    onLoad() {
      this.$request
        .get(
          "/order/personal?username=" +
            this.$store.state.userInfo.username +
            "&finished=false"
        )
        .then(res => {
          this.orderList.push.apply(this.orderList, res.data.data);
          // 加载状态结束
          this.loading = false;
          console.log("orderList", this.orderList);
          this.orderList.forEach(item => {
              this.activeName.push(item.add_time);
          });

          console.log("activeName", this.activeName);
          if (this.orderList.length >= 0) {
            this.finished = true;
          }
        });
    }
  },
  components: {
    orderModule
  }
};
</script>>
<style lang="scss" scoped>
.van-cell {
  line-height: 20px;
  // background: rgba(107, 194, 53, 0.19);
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  margin: 1vh 2vw;
  width: 95%;
  padding-bottom: 0;
  color: #969799;
  .van-cell__title {
    -webkit-box-flex: 1;
    -webkit-flex: 1;
    flex: 1;
    padding: 1vh 0;
    font-size: 12px;
    color: #969799;

  }

  .van-cell__value {
    -webkit-box-flex: 3;
    -webkit-flex: 3;
    flex: 3;
  }
  .orderFooter {
    // border-top: 1px solid #f7f7f7;
    padding: 1vh 0;
    font-size: 12px;
  }
  .van-card{
    background: rgba(174, 221, 179, 0.03)
  }
}
</style>