<template>
  <div style="margin-top: 15px;">
    <el-input
      placeholder="请输入内容"
      size="mini"
      v-model="field"
      class="input-with-select"
      remote
      remote-method
    >
      <el-select v-model="select" slot="prepend" placeholder="请选择">
        <el-option label="用户名" value="用户名"></el-option>
        <el-option label="订单号" value="订单号"></el-option>
        <el-option label="联系方式" value="联系方式"></el-option>
        <el-option label="配送地址" value="配送地址"></el-option>
      </el-select>
      <el-button slot="append" icon="el-icon-search"></el-button>
    </el-input>
  </div>
</template>
<script>
export default {
  name: "search",
  select: "",
  data() {
    return {
      field: "12341",
      select: "",
    };
  },
  updated() {
    console.log(this.select, 888);
  },
  method: {},
};
</script>
