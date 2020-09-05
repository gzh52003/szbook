<template>
  <div class="hotNews">
    <h3>热点</h3>
    <div class="body">
      <van-pull-refresh v-model="loading">
        <van-list v-model="loading" :finished="finished" finished-text="没有更多了" @load="onLoad">
          <pageitem
            v-for="val in pageData"
            :key="val.news_id"
            :to="val.news_id+'?title='+val.new_title"
            :imgurl="val.news_post"
          >
            <template #title>{{val.new_title}}</template>
            <template #look>{{val.reading_num}}</template>
            <template #heart>{{val.enjoyed_num}}</template>
          </pageitem>
        </van-list>
      </van-pull-refresh>
    </div>
  </div>
</template>
<script>
import pageitem from "../../components/HotPage";
export default {
  data() {
    return {
      pageNumber: 1,
      pageData: [],
      loading: false,
      finished: false,
    };
  },
  methods: {
    getNews() {
      this.$request
        .post("https://api.szbookmall.com/app/news/list", {
          pageNumber: this.pageNumber,
        })
        .then((res) => {
          this.pageData = [...this.pageData,...res.data.data.list];
          this.pageNumber += 1;
          this.loading = false;
        })
        .catch((err) => {
          console.log("请求错误：" + err);
        });
    },
    onLoad() {
      this.loading = true;
      this.getNews();
    },
  },
  components: {
    pageitem,
  },
  created() {
    this.getNews();
  },
};
</script>
<style lang="scss">
.hotNews {
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  h3 {
    width: 100%;
    height: 44px;
    padding: 0 8px;
    font-size: 17px;
    margin: 0;
    line-height: 44px;
    box-sizing: border-box;
    border-bottom: 1px solid rgb(238, 238, 238);
  }
  .body {
    width: 100%;
    overflow-y: auto;
  }
}
</style>
