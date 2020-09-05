<template>
  <div class="item" @click='goto(to)' :imgurl="imgurl">
    <a href="#">
      <div class="imgBox">
        <img v-lazy="imgurl" />
      </div>
      <p>
        <slot name="title"></slot>
      </p>
      <p>
        <span>
          <van-icon name="eye" />&nbsp;
          <slot name="look"></slot>
        </span>
        <span>
          <van-icon name="like" />&nbsp;
          <slot name="heart"></slot>
        </span>
      </p>
    </a>
  </div>
</template>
<script>
export default {
  data() {
    return {};
  },
  methods:{
    goto(id){
      window.location.replace("https://h5.szbookmall.com/#/hot/detail/"+this.to);
      }
  },
  props: ["to", "imgurl"],
};
</script>
<style lang="scss" scoped>
.item {
  width: 100%;
  margin-bottom: 10px;
  a {
    display: block;
    padding: 15px;
    box-sizing: border-box;
    width: 100%;
    height: 100%;
    color: #000;
    .imgBox {
      width: 100%;
      height: 168px;
      overflow: hidden;
      img {
        object-fit: cover;
        width: 100%;
      }
    }
    p {
      text-align: left;
      &:nth-of-type(1) {
        margin: 10px 0 15px;
      }
      &:nth-of-type(2) {
        font-size: 12px;
        margin: 0;
        span {
          &:nth-of-type(2){
          margin-left: 20px;
          }
        }
      }
      .van-icon {
        color: #c4c4c4;
        vertical-align: middle;
      }
    }
  }
}
</style>