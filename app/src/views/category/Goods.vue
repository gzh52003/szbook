<template>
  <div class="goods">
    <div class="topbar">
      <div class="col-7">
        <div class="icon" @click="goback">
          <van-icon name="arrow-left" />
        </div>
      </div>
      <div class="col-3">
        <van-icon class="iconfont" class-prefix="icon" name="gouwuchezhengpin" :badge="cartNum" />
      </div>
    </div>
    <div class="container">
      <div class="imgbox-goods">
        <img :src="pageData.post" :alt="pageData.name" />
      </div>
      <div class="info">
        <p class="price">
          ￥{{pageData.sale_price}}
          <del>￥{{pageData.market_price}}</del>
        </p>
        <h1>{{pageData.name}}</h1>
        <p class="title" v-html="pageData.title"></p>
        <p class="count">
          <span>浏览次数 {{pageData.count['view']}}</span>
          <span>销量 {{pageData.count.sale}}</span>
        </p>
      </div>
      <img
        style="width:100%;object-fix:cover"
        src="http://image.szbookmall.com/Upload/Images/WLKJ_V2/23/_2/93/_1/59/78/30/26/23_293_1597830269_001.jpg"
        alt
      />
      <p class="desc" v-html="pageData.content"></p>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      pageData: {},
    };
  },
  methods: {
    goback() {
      this.$router.back();
    },
  },
  computed: {
    cartNum: function () {
      // console.log("cartlength", this.$store.state.userInfo.cartInfo.length);
      return (this.$store.state.userInfo.cartInfo.length);
    },
  },
  created() {
    this.$request
      .post("https://api.szbookmall.com/app/product/detail", this.$route.params)
      .then((res) => {
        this.pageData = res.data.data;
        this.$store.commit("setCurrentGoods", res.data.data);
      });
  },
};
</script>
<style lang="scss">
.goods {
  width: 100%;
  height: 100%;
  .topbar {
    width: 100%;
    background: #fff;
    z-index: 10;
    position: absolute;
    box-sizing: border-box;
    height: 45px;
    padding: 0 15px;
    display: flex;
    align-items: center;
    box-shadow: 0 0 10px -5px rgba(0, 0, 0, 0.5);
    div {
      display: inline-block;
      height: 25px;
      line-height: 25px;
      .icon {
        text-align: center;
        width: 18px;
        font-size: 18px;
        color: salmon;
      }
    }
    .col-3 {
      width: 30%;
      text-align: right;
      .van-info {
        display: inline-block;
        height: 16px;
        line-height: 16px;
        position: relative;
        font-size: 8px;
        width: 16px;
        right: 8px;
      }
    }
    .col-7 {
      width: 70%;
      text-align: left;
    }
  }
  .container {
    padding-top: 45px;
    width: 100%;
    height: 100%;
    .imgbox-goods {
      width: 100%;
      img {
        width: 100%;
      }
    }
    .info {
      padding: 15px;
      margin-bottom: 10px;
      box-sizing: border-box;
      .price {
        width: 100%;
        height: 22px;
        color: #da251c;
        font-weight: 600;
        text-align: left;
        margin: 0 0 10px;
        del {
          margin-left: 12px;
          font-weight: 300;
          font-size: 12px;
          color: #adadad;
        }
      }
      h1 {
        font-size: 14px;
        font-weight: 700;
        text-align: left;
        margin: 0 0 10px;
      }
      .title {
        color: #878787;
        font-size: 14px;
        text-align: left;
        margin: 0 0 10px;
        p {
          margin: 0 0 10px;
        }
      }
      .count {
        text-align: left;
        margin: 0 0 10px;
        font-size: 12px;
        color: #878787;
        span {
          padding-right: 16px;
        }
      }
    }
    .desc {
      margin: 0;
      padding: 10px;
      text-align: left;
      overflow-x: hidden;
      p {
        margin: 0;
      }
      img {
        width: 100%;
        object-fit: cover;
      }
    }
  }
}
</style>
