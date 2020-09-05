<template>
  <div class="classifyContext">
    <div class="small_class" :key="item.length" v-for="item in msg.list">
      <h4 style="text-align:start">{{ item.name }}</h4>
      <div class="dl_box">
        <dl
          class="_dl"
          :key="child.name"
          v-for="child in item.children[0].list"
          @click="childselect(child.id,child.name)"
        >
          <dt>
            <img :src="child.post" alt />
          </dt>
          <dd>{{child.name}}</dd>
        </dl>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "classifyContext",
  props: ["msg"],
  data() {
    return {};
  },
  methods: {
    initclasscontext() {
      console.log(this.msg);
    },
    childselect(table, id) {
      console.log(table, id);
      this.$emit("select", table, id);
    },
  },
  created() {
    this.initclasscontext();
  },
};
</script>
<style lang="scss">
dl,
dd,
ul,
li,
div,
h1,
h2,
h3,
h4,
h5,
h6,
main {
  padding: 0;
  margin: 0;
}
.small_class {
  min-height: 100px;
  padding-top: 14px;
  padding-bottom: 24px;
  padding-left: 20px;
  h4 {
    padding-bottom: 8px;
  }
  .dl_box {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;

    ._dl {
      width: 80px;
      height: 100px;
      display: flex;

      flex-direction: column;
      justify-content: center;
      align-items: center;
      dt {
        width: 60%;
        padding-bottom: 5px;
        img {
          width: 100%;
        }
      }
      dd {
        width: 80px;
      }
    }
  }
}
</style>