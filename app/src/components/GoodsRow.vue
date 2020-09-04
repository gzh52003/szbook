<template>
  <section>
    <div class="head">
      <div class="left"><slot name="left"></slot></div>
      <div class="right"><slot name="right"></slot></div>
    </div>
    <div class="body">
      <div class="goodslist"><ul><slot name="goodslist"></slot></ul></div>
      <div class="imglist"><slot name="imgslot"></slot></div>
    </div>
  </section>
</template>
<script>
export default {};
</script>
<style lang="scss" scoped>
section {
  width: 100%;
  padding: 0 10px 10px;
  box-sizing: border-box;
  border-top: 5px solid rgb(248, 248, 248);
  .head {
    height: 40px;
    width: 100%;
    display: flex;
    .left {
      line-height: 40px;
      width: 80%;
      text-align: left;
      font-size: 16px;
      color: #393939;
    }
    .right {
      font-size: 14px;
      color: #616161;
      line-height: 40px;
      width: 20%;
      text-align: right;
    }
  }
  .body {
    width: 100%;
    margin-top: 15px;
    overflow: hidden;
    .goodslist{
      overflow-x: auto;
      ul{
        display: flex;
      }
    }
    .imglist{
      width: 100%;
    }
  }
}
</style>