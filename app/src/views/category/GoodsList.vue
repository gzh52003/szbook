<template>
  <div class="goodslist">
    <van-nav-bar :title="$route.params.id.slice(6)" left-arrow @click-left="onClickLeft" border />
  </div>
</template>
<script>
import vantFun from "../../vant/comVant";
import { Toast } from "vant";
vantFun();
export default {
  name: "goodsList",
  data() {
    return {
      typesort: ["综合", "销量", "价格", "时间", ""],
    };
  },
  methods: {
    onClickLeft() {
      // 通过路由，回到上一次停留的页面
      this.$router.back();
    },
  },

  created() {
    console.log(this.$route.params.id);
  },
};
</script>

<style lang="scss">
p {
  color: #ee0a24;
}
</style>