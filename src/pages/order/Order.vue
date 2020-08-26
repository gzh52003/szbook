<template>
  <div>
    <el-table
      ref="table"
      :default-sort="{ prop: 'date', order: 'descending' }"
      highlight-current-row
      :data="orderdata"
      style="width: 100%;"
    >
      <el-table-column type="expand">
        <template v-slot="scope">
          <el-table :data="scope.row.details">
            <el-table-column
              label="商品名"
              prop="goodname"
              show-overflow-tooltip
            >
            </el-table-column>
            <el-table-column label="单价" prop="price" width="150">
            </el-table-column>
            <el-table-column label="数量" prop="count" width="150">
            </el-table-column>
            <el-table-column label="总价" prop="prices" width="150">
            </el-table-column>
          </el-table>
        </template>
      </el-table-column>
      <el-table-column label="订单号" prop="orderNum" width="100">
      </el-table-column>
      <el-table-column label="下单日期" sortable prop="date" width="120">
      </el-table-column>
      <el-table-column label="用户名" prop="name" width="80"> </el-table-column>
      <el-table-column label="商品数量" prop="goodsNum" width="80">
      </el-table-column>
      <el-table-column label="总价" prop="total" width="80"> </el-table-column>
      <el-table-column label="配送地址" prop="address" show-overflow-tooltip>
        <template v-slot="scope">
          <el-input
            v-show="scope.row.show"
            v-model="scope.row.address"
          ></el-input>
          <span v-show="!scope.row.show">{{ scope.row.address }}</span>
        </template>
      </el-table-column>
      <el-table-column label="联系方式" prop="contact" width="150">
      </el-table-column>
      <el-table-column label="操作" width="160">
        <template v-slot="scope">
          <el-button type="text" @click="scope.row.show = false;">完成</el-button>
          <el-button type="text" @click="scope.row.show = true;">编辑</el-button>
        </template>
      </el-table-column>
    </el-table>
    <pagination :datas="orderdata"></pagination>
  </div>
</template>

<script>
import pagination from "./pagination.vue";
export default {
  data() {
    return {
      orderdata: [
        {
          id: "1",
          orderNum: 1357813,
          date: "2014-05-12",
          goodsNum: 12,
          total: 350,
          address: "深圳市龙岗区平湖街道新南大岭14号",
          contact: "13715158094",
          name: "蔡珊珊",
          show:false,
          children: [
            {
              orderNum: 1357813,
              goodname: "十万个为什么",
              price: 18.8,
              count: 1,
              prices: 18.8,
            },
          ],
        },
        {
          id: "2",
          orderNum: 1357813,
          date: "2014-05-13",
          goodsNum: 12,
          total: 350,
          address:
            "深圳市龙岗区平湖街道新南大岭14号深圳市龙岗区平湖街道新南大岭14号深圳市龙岗区平湖街道新南大岭14号",
          contact: "13715158094",
          name: "蔡珊珊",
          show:false,
          details: [
            {
              goodname: "十万个为什么",
              price: 18.8,
              count: 1,
              prices: 18.8,
            },
          ],
        },
        {
          id: "3",
          orderNum: 1357813,
          date: "2014-05-14",
          goodsNum: 12,
          total: 350,
          address: "深圳市龙岗区平湖街道新南大岭14号",
          contact: "13715158094",
          name: "蔡珊珊",
          show:false,
          details: [
            {
              goodname: "十万个为什么",
              price: 18.8,
              count: 1,
              prices: 18.8,
            },
          ],
        },
        {
          id: "4",
          orderNum: 1357813,
          date: "2014-05-15",
          goodsNum: 12,
          total: 350,
          address: "深圳市龙岗区平湖街道新南大岭14号",
          contact: "13715158094",
          name: "蔡珊珊",
          show:false,
          details: [
            {
              goodname: "十万个为什么",
              price: 18.8,
              count: 1,
              prices: 18.8,
            },
          ],
        },
      ],
    };
  },
  methods: {
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

.cell {
  text-align: center;
}
</style>
