<template>
  <div class="home">
    <div class="topBar">
      <van-search shape="round" background="#fff" placeholder="请输入搜索关键词" />
      <van-tabs line-width="30px">
        <van-tab
          v-for="(item,idx) in navbar"
          :title="item.name"
          :key="idx"
          color="#f10"
          :url="item.url"
        ></van-tab>
      </van-tabs>
    </div>
    <div class="mainContent">
      <van-swipe :autoplay="3000" indicator-color="white">
        <van-swipe-item v-for="image in bannerimages" :key="image.id">
          <a :href="image.url" style="display:flex;align-items:center"><img v-lazy="image.post"/></a>
        </van-swipe-item>
      </van-swipe>
      <van-grid :column-num="5" icon-size="46px" style="margin:10px 0">
        <van-grid-item
          v-for="value in Home_category"
          :key="value.id"
          :icon="value.post"
          :url="value.url"
          :text="value.name"
        />
      </van-grid>
      <goodsSection v-for="val in goodsList" :key="val.id">
        <template #left>{{val.name}}</template>
        <template #right>{{val.data.length?'更多':""}}</template>
        <!-- <template #imglist></template> -->
        <template #goodslist>
          <li v-for="item in val.data" :key="item.id" @click="gotoGoods(item.id)">
            <div class="imgbox" v-if="val.name!='推荐品牌'">
              <img v-lazy="item.post" />
              <p>{{item.name}}</p>
              <p>
                ￥{{item.sale_price}}
                <del>￥{{item.market_price}}</del>
              </p>
            </div>
            <div class="imgbox" v-else>
              <img v-lazy="item.post" style="width:40px;height:40px;margin-left:24px"/>
              <p style="width:88px">{{item.name}}</p>
            </div>
          </li>
        </template>
        <template #imgslot>
          <div class="showImg" v-if="val.name=='开学季专区'">
            <div v-for="(img,idx) in val.inner_ads" 
            :key="img.id" 
            :class="idx==3?'col-10':'col-3'"><a :href="img.link"><img v-lazy="img.post" alt=""></a></div>
          </div>
          <div class="showImg" v-else>
            <div v-for="img in val.inner_ads" 
            :key="img.id" 
            class="col-10"><a :href="img.link"><img v-lazy="img.post" alt=""></a></div>
          </div>
        </template>
      </goodsSection>
    </div>
  </div>
</template>

<script>
import goodsSection from "../components/GoodsRow";
import Vue from "vue";
import {
  Tabs,
  Tab,
  Swipe,
  SwipeItem,
  Search,
  Lazyload,
  Grid,
  GridItem,
} from "vant";
Vue.use(Tab);
Vue.use(Tabs);
Vue.use(Swipe);
Vue.use(SwipeItem);
Vue.use(Search);
Vue.use(Lazyload);
Vue.use(Grid);
Vue.use(GridItem);

export default {
  name: "Home",
  data() {
    return {
      navbar: [],
      bannerimages: [],
      Home_category: [],
      goodsList: [],
    };
  },
  methods:{
    gotoGoods(id){
      
      this.$router.push("/goods/"+id);
    }
  },
  components: {
    goodsSection,
  },
  created() {
    // topnav
    this.$request
      .post("https://api.szbookmall.com/app/menu/top")
      .then((res) => {
        this.navbar = res.data.data.list;
      })
      .catch((err) => {
        console.log(err + "topbar-请求错误！");
      });
    // banner
    this.$request
      .post("https://api.szbookmall.com/app/banner/list")
      .then((res) => {
        this.bannerimages = res.data.data.banner_data;
      })
      .catch((err) => {
        console.log(err + "banner-请求错误！");
      });
    // 分类
    this.$request
      .post("https://api.szbookmall.com/app/menu/icon")
      .then((res) => {
        this.Home_category = res.data.data.list;
      })
      .catch((err) => {
        console.log(err + "分类列表-请求错误！");
      });
    // 商品
    this.$request
      .post("https://api.szbookmall.com/app/floor/list")
      .then((res) => {
        console.log(res.data.data);
        this.goodsList = res.data.data;
      })
      .catch((err) => {
        console.log(err + "商品-请求错误！");
      });
  },
};
</script>

<style lang="scss">
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
    .van-grid-item {
      .van-grid-item__text {
        font-size: 14px;
        padding: 2px 0 0;
      }
      .van-icon {
        border-radius: 50%;
        overflow: hidden;
      }
    }
    li {
      .imgbox {
        display: flex;
        width: 100%;
        flex-direction: column;
        img {
          width: 90px;
          height: 90px;
        }
        p {
          width: 107px;
          height: 38px;
          margin: 6px 0;
          font-size: 14px;
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          overflow: hidden;
          text-overflow: ellipsis;
          &:nth-of-type(2) {
            font-size: 13px;
            color: #da251c;
            height: 20px;
            margin: 0;
            del {
              margin-left: 4px;
              color: #adadad;
              font-size: 12px;
            }
          }
        }
      }
    }
    .showImg{
      div{
        overflow: hidden;
        margin: 0 auto;
      }
      .col-3{
        width: 33%;
        display: inline-block;
        box-sizing: border-box;
        border: 3px solid #fff;
      }
      .col-10{
        width: 100%;
      }
      img{
        object-fit: cover;
        width: 100%;
      }
    }
  }
}
</style>
