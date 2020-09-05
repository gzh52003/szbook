<template>
  <div class="goodslist">
    <van-nav-bar :title="$route.query.tatle" left-arrow @click-left="onClickLeft" border />

    <van-tabs
      v-model="active"
      animated
      sticky
      @change="changegoodstate()"
      @click="readerpage(active)"
    >
      <van-tab :title="item.name" :key="index" v-for="(item,index) in typesort">
        <template #title>
          <p>
            {{item.name}}
            <van-icon v-if="goodstate == false && index == active " name="arrow-up" />
            <van-icon v-else name="arrow-down" />
          </p>
        </template>

        <van-list v-model="loading" :error.sync="error" offset immediate-check @load="onLoad">
          <goods-data :listdata="goodslist" v-for="item in goodslist" :key="item.length"></goods-data>
        </van-list>
      </van-tab>
    </van-tabs>
  </div>
</template>
<script>
import goodsData from "../../components/goodsData";
import vantFun from "../../vant/comVant";
vantFun();
export default {
  name: "goodsList",
  components: {
    goodsData,
  },

  data() {
    return {
      indexpage: 1,
      goodstate: true,
      chicktime: 1,
      active: 0,
      goodslist: [],
      xileixing: "",
      paixu: 1,
      page: 1,
      error: false,
      loading: false,
      finished: false,
      refreshing: false,
      typesort: [
        { name: "综合" },
        { name: "销量" },
        { name: "价格" },
        { name: "时间" },
        // "综合",
        // "销量",
        // "价格",
        // "时间",
        // <van-icon name="qr" />,
      ],
    };
  },
  methods: {
    onClickLeft() {
      // 通过路由，回到上一次停留的页面
      this.$router.back();
    },
    // 获取数据
    /**
     *
     * this.$route.id:搜索商品类型id
     * this.typesort.name:商品类型分类名称
     * this.goodstate:降序为true(2)，升序为false(1)
     *
     * */
    async renderlistdata() {
      // console.log("进来渲染页面", this.active);
      switch (this.active) {
        case 0:
          this.xileixing = "default_order";
          break;
        case 1:
          this.xileixing = "sale_order";
          break;
        case 2:
          this.xileixing = "price_order";
          break;
        case 3:
          this.xileixing = "create_time_order";
          break;
      }

      if (this.goodstate) {
        this.paixu = 2;
      } else {
        this.paixu = 1;
      }
      let result = await this.$request
        .post("https://api.szbookmall.com/app/product/search", {
          category_id: this.$route.params.id,
          [this.xileixing]: this.paixu,
          pageNumber: this.page,
          pageSize: 10,
          product_type: -1,
        })
        .then((res) => res);
      // this.goodslist.push(data.data.list);
      // console.log(result.data.data.list);
      this.goodslist = [...this.goodslist, ...result.data.data.list];
      this.page++;
      this.loading = false;
      // console.log(this.goodslist);
    },
    async readerpage(pagetime) {
      this.xileixing = this.active;
      // if (this.goodsname != this.typesort[this.active].name) {
      //   this.page = 1;
      //   console.log("不同名", this.page);
      // } else {
      //   this.goodsname = this.typesort[this.active].name;
      //   this.page++;
      //   console.log("同名", this.page);
      // }
      this.page = 1;
      this.goodslist = [];
      if (this.chicktime != 1) {
        this.goodstate = !this.goodstate;
        // console.log("第一次点击事件触发", this.goodstate);
      } else {
        // console.log("不是第一次点击事件触发", this.chicktime, this.goodstate);
        this.chicktime++;
        this.goodstate = true;
      }
      // console.log(pagetime);
      if (pagetime == 0 && this.indexpage == 1) {
        // console.log("我是首页");
        this.goodstate = false;
        this.indexpage++;
      }
      await this.renderlistdata();
    },
    changegoodstate() {
      this.page = 1;
      this.chicktime = 1;
      this.goodstate = true;
      console.log("切换页面触发", this.goodstate);
    },
    async onLoad() {
      console.log("我是onload");
      await this.renderlistdata();
      // this.goodslist = [...this.goodslist,...]
    },

    async check() {
      console.log("我就是我");
      await this.onLoad();
    },
  },
  created() {
    // console.log(this.$route.params.id);
    // this.renderlistdata();
  },
};
</script>

<style lang="scss">
.van-tabs {
  .van-tabs__nav {
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    align-items: center;
    height: 100%;
  }
  .van-tabs__content {
    height: 100%;
  }
}
</style>