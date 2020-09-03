<template>
  <div style="margin-top: 15px;">
    <el-input
      placeholder="请输入内容"
      size="mini"
      v-model="contents"
      class="input-with-select"
      remote
      remote-method
    >
      <el-select v-model="select" slot="prepend" placeholder="请选择">
        <el-option label="用户名" value="username"></el-option>
        <el-option label="联系方式" value="phone"></el-option>
        <el-option label="配送地址" value="address"></el-option>
      </el-select>

    </el-input>
  </div>
</template>
<script>
import {findData} from "./firstin.js";
export default {
  name: "search",
  props:["pagesize","currentpage"],
  select: "",
  data() {
    return {
      field: "",
      select: "",
      contents:""
    };
  },
  updated() {
    this.field=this.select;
    if(this.field&&this.contents)
    findData({field:this.field,contents:this.contents,page:this.currentpage,size:this.pagesize}).then(res=>{
      this.$emit("changeData",res)
    })
  },
  method: {},
};
</script>
