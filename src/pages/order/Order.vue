<template>
  <div>
    <el-table
      ref="table"
      :default-sort="{ prop: 'add_time', order: 'descending' }"
      highlight-current-row
      :data="orderdata"
      style="width: 100%;"
    >
      <el-table-column type="expand">
        <template v-slot="scope" >
          <el-table :data="scope.row.details" >
            <el-table-column label="商品编号" prop="isbn" show-overflow-tooltip>
            </el-table-column>
            <el-table-column
              label="商品名"
              prop="bookName"
              show-overflow-tooltip
            >
            </el-table-column>
            <el-table-column label="单价" prop="line_price" width="150">
            </el-table-column>
            <el-table-column label="数量" prop="num" width="150">
            </el-table-column>
            <el-table-column label="总价" prop="computePrice(num,line_price)" width="150">
            </el-table-column>
          </el-table>
        </template>
      </el-table-column>
      <el-table-column label="订单号" prop="orderNum" width="100">
      </el-table-column>
      <el-table-column label="下单日期" sortable prop="add_time" width="120">
      </el-table-column>
      <el-table-column label="用户名" prop="username" width="80">
      </el-table-column>
      <el-table-column label="商品数量" prop="goodsNum" width="90">
      </el-table-column>
      <el-table-column label="总价" prop="totalPrice" width="80">
      </el-table-column>
      <el-table-column label="配送地址" prop="address" show-overflow-tooltip>
        <template v-slot="scope">
          <el-input
            v-show="scope.row.show"
            v-model="scope.row.address"
          ></el-input>
          <span v-show="!scope.row.show">{{ scope.row.address }}</span>
        </template>
      </el-table-column>
      <el-table-column label="联系方式" prop="phone" width="150">
      </el-table-column>
      <el-table-column label="操作" width="160">
        <template v-slot="scope">
          <el-button type="text" @click="scope.row.show = false"
            >完成</el-button
          >
          <el-button type="text" @click="scope.row.show = true">编辑</el-button>
        </template>
      </el-table-column>
    </el-table>
    <pagination
      :datasNum="totoalDataNum"
      v-on:getCurrentPage="getCurrentPage"
      v-on:getPageSize="getPageSize"
    ></pagination>
  </div>
</template>

<script>
import pagination from "./pagination.vue";
import firstIn from "./firstin.js";
import getDetails from './getDetails.js';

export default {
  data() {
    return {
      totoalDataNum: 0,
      pagesize: 2,
      currentpage: 1,
      orderdata:[],
      // orderdata: [
      //   // {
      //   // id:1,
      //   // address:"11",
      //   // phone:111,
      //   // add_time:"2014-8-18",
      //   // totalPrice:358,
      //   // username:'sawf',
      //   // goodsNum:2,
      //   // details:[{isbn:13158},{isbn:12123},]
      // // }
      // ],

    };
  },
  // computed(){
  //   computePrice(a,b){
  //       return a*b;
  //   }
  // },
  created() {
    firstIn({ size: this.pagesize, page: this.currentpage }).then((res) => {
      let result = JSON.parse(res);
      this.totoalDataNum = result.data[result.data.length - 1].orderNum;
      result.data.slice(0, result.data.length - 1).forEach(async cur=>{
          getDetails({'goodsID':cur.details}).then(res=>{
                         this.orderdata.forEach(cur=>{
                         cur.details=JSON.parse(res).data
                         })

          })
        })
      this.orderdata = result.data.slice(0, result.data.length - 1);
      console.log(this.orderdata)
    });


  },
  methods: {
    getCurrentPage(_currentpage, _size) {
      this.pagesize = _size;
      this.currentpage = _currentpage;
      firstIn({ size: this.pagesize, page: this.currentpage }).then((res) => {
      let result = JSON.parse(res);
      this.totoalDataNum = result.data[result.data.length - 1].orderNum;
      result.data.slice(0, result.data.length - 1).forEach(async cur=>{
          getDetails({'goodsID':cur.details}).then(res=>{
                         this.orderdata.forEach(cur=>{
                         cur.details=JSON.parse(res).data
                         })
          })
        })
      this.orderdata = result.data.slice(0, result.data.length - 1);
      });
    },
    getPageSize(_currentpage, _size) {
      this.pagesize = _size;
      this.currentpage = _currentpage;
      firstIn({ size: this.pagesize, page: this.currentpage }).then((res) => {
        let result = JSON.parse(res);
      this.totoalDataNum = result.data[result.data.length - 1].orderNum;
      result.data.slice(0, result.data.length - 1).forEach(async cur=>{
          getDetails({'goodsID':cur.details}).then(res=>{
                         this.orderdata.forEach(cur=>{
                         cur.details=JSON.parse(res).data
                         })
          })
        })
      this.orderdata = result.data.slice(0, result.data.length - 1);
      });
    },
  },
  components: {
    pagination,
  },
};
</script>

<style>
.el-main {
  line-height: 0;
}
.el-table .cell {
  line-height: 30px !important;
}
.cell {
  font-size: 12px;
  text-align: center !important;
}
</style>
