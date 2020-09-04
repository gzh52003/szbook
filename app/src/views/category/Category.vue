<template>
  <div class="category">
    <van-search v-model="searchvalue" shape="round" background="#00abaf" placeholder="请输入搜索关键词" />
    <van-tree-select
      class="_v-container nav-bar"
      :items="items"
      height="94%"
      :key="item.name"
      v-for="(item, index) in classifymsg"
      @click-nav="changeindex(index)"
      :main-active-index.sync="active"
    >
      <template #content>
        <div v-if="active === idx">
          <div :key="item.length" v-for="item in item[idx].children">
            <!-- {{ item }} -->
            <classify-context :msg="item" @select="selectitem"></classify-context>
          </div>
        </div>
      </template>
    </van-tree-select>
  </div>
</template>

<script>
import classifyContext from "../../components/classifyContext";

export default {
  components: {
    classifyContext,
  },
  data() {
    return {
      active: 0,
      idx: 0,
      searchvalue: "",
      classifymsg: [],
      items: [],
    };
  },
  created() {
    this.initdata();
  },
  methods: {
    onSearch() {
      console.log("我是搜索框");
    },
    changeindex(idx) {
      console.log(idx);
      this.idx = this.active;
      console.log(this.active);
    },
    // 这个是用于商品跳转的
    selectitem(msg) {
      console.log(msg);
      console.log(this.$route);
      console.log(this.$router);
      this.$router.push("/goodslist/" + "tatle=" + msg);
      console.log(this.$route);
    },
    async initdata() {
      let data = await fetch(
        "https://api.szbookmall.com/app/product_category/list",
        {
          method: "post",
          headers: {
            "Content-type": "application:/x-www-form-urlencoded:charset=UTF-8",
          },
        }
      ).then((res) => res.json());
      this.classifymsg = data.data;
      console.log(data.data.list);
      let classify = data.data.list;
      this.items = classify.reduce((pre, item) => {
        pre.push({ text: item.name });
        return pre;
      }, []);
      console.log(this.items);
    },
  },
};
</script>
<style lang="scss">
.category {
  display: flex;
  flex-direction: column;
  height: 100%;
  overflow: hidden;
  .nav-bar {
    display: flex;
    flex-direction: row;
    justify-content: center;

    .van-tree-select__nav-item {
      flex: 1;
    }

    .van-tree-select__content {
      flex: 3;
    }
    .van-sidebar-item--select::before {
      width: 2px;
      height: 30px;
      background-color: #00abaf;
    }
  }
}
</style>
