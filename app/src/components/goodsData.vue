<template>
  <div class="linehai">{{listdata}}</div>
</template>
<script>
import vantfun from "../vant/comVant";
vantfun();
export default {
  name: "goodsDatas",
  /**
   *
   * goodstype:搜索商品类型id
   * goodsmsg:商品类型分类名称
   * type:搜索商品信息
   * state:降序为true，升序为false
   *
   * */

  props: ["listdata"],
  data() {
    return {
      loading: false,
      finished: false,
      refreshing: false,
    };
  },
  async created() {
    // this.renderlistdata();
    // console.log(this.parent);
  },
  methods: {
    // 获取数据 //

    onRefresh() {
      // // 清空列表数据
      // this.finished = false;
      // // 重新加载数据
      // // 将 loading 设置为 true，表示处于加载状态
      // this.loading = true;
      // this.onLoad();
    },
  },
};
</script>
<style lang="scss">
.linehai {
  width: 100%;
}
</style>