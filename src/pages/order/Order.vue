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
        <template v-slot="scope">
          <el-table :data="scope.row.details">
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
            <el-table-column label="数量" prop="buynum" width="150">
            </el-table-column>
            <el-table-column label="总价" prop="" width="150">
              <template v-slot="scope">
                <!-- Number(scope.row.num) -->
                <span :data="scope.row">{{
                  (
                    parseFloat(scope.row.buynum) *
                    parseFloat(scope.row.line_price.substr(1))
                  ).toFixed(2)
                }}</span>
              </template>
            </el-table-column>
          </el-table>
        </template>
      </el-table-column>
      <el-table-column label="订单号" prop="_id" width="100">
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
            @change="putData(scope.row._id,scope.row.address,scope.row.phone)"
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
// import {deleteData,findData,changeData} from "./firstin.js";
import getDetails from "./getDetails.js";
import {findData,changeData} from "./firstin.js";
export default {
  data() {
    return {
      totoalDataNum: 0,
      pagesize: 5,
      currentpage: 1,
      orderdata: [],
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
  computed: {
  },
  created() {
    findData({ size: this.pagesize, page: this.currentpage }).then((res) => {
      let result = JSON.parse(res);
      this.totoalDataNum = result.data[result.data.length - 1].orderNum;
      result.data.slice(0, result.data.length - 1).forEach(async (cur) => {
        let obj1 = cur.details;
        cur.goodsNum = 0;
        cur.totalPrice = 0;
        obj1.forEach((item) => {
          // 计算订单商品总数量
          cur.goodsNum += item.buynum;
        });
        getDetails({ goodsID: obj1 }).then((res) => {
          const obj2 = JSON.parse(res).data;
          // order数据库中记录订单详情字段：isbn，buynum；
          //根据isbn到goods数据库中取回商品详细信息，数据合并
          var obj = obj2.map((item, index) => {
            return { ...obj1[index], ...item };
          });

          obj.forEach((item) => {
            //  计算订单总价
            cur.totalPrice +=
              parseFloat(item.buynum) * parseFloat(item.line_price.substr(1));
          });
          cur.totalPrice = cur.totalPrice.toFixed(2);
          cur.details = obj;
        });
      });
      this.orderdata = result.data.slice(0, result.data.length - 1);
    });
  },
  methods: {
    getCurrentPage(_currentpage, _size) {
      this.pagesize = _size;
      this.currentpage = _currentpage;
      findData({ size: this.pagesize, page: this.currentpage }).then((res) => {
        let result = JSON.parse(res);
        this.totoalDataNum = result.data[result.data.length - 1].orderNum;
        result.data.slice(0, result.data.length - 1).forEach(async (cur) => {
          let obj1 = cur.details;
          cur.goodsNum = 0;
          cur.totalPrice = 0;
          obj1.forEach((item) => {
            // 计算订单商品总数量
            cur.goodsNum += item.buynum;
          });
          getDetails({ goodsID: obj1 }).then((res) => {
            const obj2 = JSON.parse(res).data;
            // order数据库中记录订单详情字段：isbn，buynum；
            //根据isbn到goods数据库中取回商品详细信息，数据合并
            var obj = obj2.map((item, index) => {
              return { ...obj1[index], ...item };
            });

            obj.forEach((item) => {
              //  计算订单总价
              cur.totalPrice +=
                parseFloat(item.buynum) * parseFloat(item.line_price.substr(1));
            });
            cur.totalPrice = cur.totalPrice.toFixed(2);
            cur.details = obj;
          });
        });
        this.orderdata = result.data.slice(0, result.data.length - 1);
      });
    },
    getPageSize(_currentpage, _size) {
      this.pagesize = _size;
      this.currentpage = _currentpage;
      findData({ size: this.pagesize, page: this.currentpage }).then((res) => {
        let result = JSON.parse(res);
        this.totoalDataNum = result.data[result.data.length - 1].orderNum;
        result.data.slice(0, result.data.length - 1).forEach(async (cur) => {
          let obj1 = cur.details;
          cur.goodsNum = 0;
          cur.totalPrice = 0;
          obj1.forEach((item) => {
            // 计算订单商品总数量
            cur.goodsNum += item.buynum;
          });
          getDetails({ goodsID: obj1 }).then((res) => {
            const obj2 = JSON.parse(res).data;
            // order数据库中记录订单详情字段：isbn，buynum；
            //根据isbn到goods数据库中取回商品详细信息，数据合并
            var obj = obj2.map((item, index) => {
              return { ...obj1[index], ...item };
            });

            obj.forEach((item) => {
              //  计算订单总价
              cur.totalPrice +=
                parseFloat(item.buynum) * parseFloat(item.line_price.substr(1));
            });
            cur.totalPrice = cur.totalPrice.toFixed(2);
            cur.details = obj;
          });
        });
        this.orderdata = result.data.slice(0, result.data.length - 1);
      });
    },
    putData(_id,address,phone){
      changeData({"_id":_id,"address":address,"phone":phone})
    }
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
