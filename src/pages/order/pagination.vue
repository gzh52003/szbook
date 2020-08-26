<template>
  <div class="block pages">
    <el-pagination
      class="pages"
      @size-change="handleSizeChange"
      @current-change="handleCurrentChange"
      :page-sizes="[5, 10, 20, 50]"
      :page-size="pageSize"
      layout="total, sizes, prev, pager, next, jumper"
      :total="datasNum"
      >
    </el-pagination>
  </div>
</template>
<script>
export default {
    name:'pagination',
    props:['datasNum'],
    data(){
        return{
            pageSize:5,
            currentPage:1
        }
    },
    methods:{
        handleSizeChange(val){
            // val 一页的条数
            this.pageSize=val;
            this.$emit("getPageSize",this.currentPage,this.pageSize)
        },
        handleCurrentChange(val){
            //val 当前页的页数
            this.currentPage=val;
            this.$emit("getCurrentPage",this.currentPage,this.pageSize)
        }
    }
}
</script>>
<style>
    .pages{
        width: 100%;
        height: 50px;
        display: flex;
        display:  -webkit-flex;
        justify-content: space-around;
        align-items:center;
        /* background: red; */
    }
    .el-pager,.el-pager li{
        vertical-align:middle;
    }
</style>