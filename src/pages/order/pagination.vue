<template>
  <div class="block pages">
    <el-pagination
      class="pages"
      @size-change="handleSizeChange"
      @current-change="handleCurrentChange"
      :page-sizes="[2, 3, 4, 5]"
      :page-size="2"
      layout="total, sizes, prev, pager, next, jumper"
      :total="datas.length"
      >
    </el-pagination>
  </div>
</template>
<script>
export default {
    name:'pagination',
    props:['datas'],
    data(){
        return{

        }
    },
    methods:{
        handleSizeChange(val){
            // val 一页的条数
            console.log(val)
        },
        handleCurrentChange(val){
            //val 当前页的页数
            console.log(val)
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