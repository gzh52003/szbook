<template>
  <div>
    <search  style="padding:22px;" @changeData="changedata" >
    </search>
    <el-table
      ref="table"
      :default-sort="{ prop: 'add_time', order: 'descending' }"
      highlight-current-row
      :data="orderdata"
      style="width: 100%;"
      :row-class-name="tableRowClassName"
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
      <el-table-column
        label="订单号"
        prop="_id"
        width="120"
        show-overflow-tooltip
      >
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
            v-show="scope.row.isshow"
            v-model="scope.row.address"
          ></el-input>
          <span v-show="!scope.row.isshow">{{ scope.row.address }}</span>
        </template>
      </el-table-column>
      <el-table-column label="联系方式" prop="phone" width="150">
        <template v-slot="scope">
          <el-input
            v-show="scope.row.isshow"
            v-model="scope.row.phone"
          ></el-input>
          <span v-show="!scope.row.isshow">{{ scope.row.phone }}</span>
        </template>
      </el-table-column>
      <el-table-column label="操作" width="160">
        <template v-slot="scope">
          <el-button
            type="success"
            size="mini"
            circle
            style="padding:13px"
            icon="el-icon-circle-check"
            @click="isfinishOrder(scope.$index, scope.row)"
          ></el-button>
          <el-button
            type="primary"
            size="mini"
            circle
            style="padding:13px;margin-left: 2px;"
            icon="el-icon-edit"
            @click="isEdit(scope.$index, scope.row)"
          ></el-button>
          <el-button
            type="danger"
            size="mini"
            circle
            style="padding:13px;margin-left: 2px;"
            icon="el-icon-delete"
            @click="delData(scope.row._id)"
          ></el-button>
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
import search from "./search.vue";
import { deleteData, findData, changeData } from "./firstin.js";

import operateDataBeforeRender from "./OrganData.js";

export default {
  data() {
    return {
      totoalDataNum: 0,
      pagesize: 5,
      currentpage: 1,
      orderdata: [],
      finished:true
    };
  },
  computed: {},
  created() {
    findData({ size: this.pagesize, page: this.currentpage }).then((res) => {
      operateDataBeforeRender(res, this);
    });
  },
  methods: {
    changedata(res){
      // operateDataBeforeRender(res, this);
       operateDataBeforeRender(res, this);
    },
    getCurrentPage(_currentpage, _size) {
      this.pagesize = _size;
      this.currentpage = _currentpage;
      findData({ size: this.pagesize, page: this.currentpage }).then((res) => {
        operateDataBeforeRender(res, this);
      });
    },
    getPageSize(_currentpage, _size) {
      this.pagesize = _size;
      this.currentpage = _currentpage;
      findData({ size: this.pagesize, page: this.currentpage }).then((res) => {
        operateDataBeforeRender(res, this);
      });
    },

    async delData(_id) {
      this.$confirm("此操作将永久删除该文件, 是否继续?", "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning",
      })
        .then(async () => {
          const a = await deleteData({ _id: _id });
          if (JSON.parse(a).code === 1)
            this.$message({
              type: "success",
              message: "删除成功!",
            });
          findData({ size: this.pagesize, page: this.currentpage }).then(
            (res) => {
              operateDataBeforeRender(res, this);
            }
          );
        })
        .catch(() => {
          this.$message({
            type: "info",
            message: "已取消删除",
          });
        });
    },
      isEdit(index, row) {
      if(row.isshow===true){
          this.$confirm("此操作将永久修改该信息, 是否继续?", "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning",
      })
        .then(async () => {
          const a = await changeData({
            _id: row._id,
            address: row.address,
            phone: row.phone,
          });
          if (JSON.parse(a).code === 1) {
            this.$message({
              message: "信息修改成功",
              type: "success",
            });
            findData({ size: this.pagesize, page: this.currentpage }).then(
              (res) => {
                operateDataBeforeRender(res, this);
              }
            );
            row.isshow = false;
          }
        })
        .catch(() => {
          this.$message({
            type: "info",
            message: "已取消修改",
          });
        });
      }else{
          row.isshow = !row.isshow;
      }
    },
    isfinishOrder(index, row){
         this.$confirm("是否确认该订单已完成?", "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning",
      })
        .then(async () => {
          row.finished='true';
          //修改数据库订单finished状态
            await fetch(`http://www.ihuanu.cn/api/order/personal`,{
              method:"put",
              headers:{ "Content-Type": "application/json" },
              body:JSON.stringify({
                _id:row._id,
                finished:"true"
              })
            }).then(res=>{
                return res.text();
            })
          this.$message({
            type: "success",
            message: "订单完成已确定",
          });

        })
        .catch(() => {
          this.$message({
            type: "info",
            message: "已取消确认",
          });

        });
    },
     tableRowClassName({row, rowIndex}) {
        if (row.finished === "true") {
          return 'success-row';
        }
        return '';
      }
  },
  components: {
    pagination,
    search
  },
};
</script>

<style scope>
.el-main {
  line-height: 0;
}
.el-table__header-wrapper{
  height: 40px!important;
}
.el-table__expanded-cell{
  padding-top:4px 10px!important;
}
.el-main .has-gutter .is-leaf{
  padding: 0!important;
  height: 40px!important;
}
.el-table .cell {
  line-height: 30px !important;
}
.cell {
  font-size: 12px;
  text-align: center !important;
}
.btn button{
  padding:0;
}
 .el-table .success-row {
    background: #f0f9eb;
  }
</style>
