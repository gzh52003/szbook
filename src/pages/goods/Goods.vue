<template>
  <el-table
    :data="tableData5"
    max-height="590"
    border
    size="small"
    highlight-current-row
    style="width: 100%"
  >
    <el-table-column type="expand">
      <template slot-scope="props">
        <el-form label-position="left" inline class="demo-table-expand">
          <el-form-item label="出版社">
            <span>{{ props.row.shop }}</span>
          </el-form-item>
          <el-form-item label="IBSN">
            <span>{{ props.row.id }}</span>
          </el-form-item>
          <el-form-item label="出版时间">
            <span>{{ props.row.shopId }}</span>
          </el-form-item>
          <el-form-item label="市场价">
            <span>{{ props.row.category }}</span>
          </el-form-item>
          <el-form-item label="图片">
            <img :src="props.row.url"/>
          </el-form-item>
        </el-form>
      </template>
    </el-table-column>
    <el-table-column label="商品 ID" width="120" prop="id"></el-table-column>
    <el-table-column label="书籍名称" width="200" prop="name"></el-table-column>
    <el-table-column label="作者" width="150" prop="author"></el-table-column>
    <el-table-column label="价格" width="100" prop="pic"></el-table-column>
    <el-table-column label="描述" width="300" prop="desc"></el-table-column>
    <el-table-column label="操作" fixed="right" width="160">
      <template slot-scope="scope">
        <el-button size="mini" @click="handleEdit(scope.row.shopId)">编辑</el-button>
        <el-button size="mini" type="danger" @click="handleDelete(scope.row.shopId)">删除</el-button>
      </template>
    </el-table-column>
  </el-table>
</template>
<script>
export default {
  data() {
    return {
      tableData5: [
        {
          id: "12987122",
          name: "好滋好味鸡蛋仔",
          category: "江浙小吃、小吃零食",
          desc: "荷兰优质淡奶，奶香浓而不腻",
          address: "上海市普陀区真北路",
          shop: "王小虎夫妻店",
          shopId: "10333",
          author: "刘益良",
          pic: "54",
          url:'./img.js'
        },
        {
          id: "12987122",
          name: "好滋好味鸡蛋仔",
          category: "江浙小吃、小吃零食",
          desc: "荷兰优质淡奶，奶香浓而不腻",
          address: "上海市普陀区真北路",
          shop: "王小虎夫妻店",
          shopId: "10333",
          author: "刘益良",
          pic: "54",
          url:'./img.js'
        },
        {
          id: "12987122",
          name: "好滋好味鸡蛋仔",
          category: "江浙小吃、小吃零食",
          desc: "荷兰优质淡奶，奶香浓而不腻",
          address: "上海市普陀区真北路",
          shop: "王小虎夫妻店",
          shopId: "10333",
          author: "刘益良",
          pic: "54",
          url:'./img.js'
        },
        {
          id: "12987122",
          name: "好滋好味鸡蛋仔",
          category: "江浙小吃、小吃零食",
          desc: "荷兰优质淡奶，奶香浓而不腻",
          address: "上海市普陀区真北路",
          shop: "王小虎夫妻店",
          shopId: "10333",
          author: "刘益良",
          pic: "54",
          url:'./img.js'
        },
      ],
    };
  },
  methods:{
    handleEdit(_id){
      console.log(_id);
    },
    handleDelete(_id){
      console.log(_id);
    }
  }
};
</script>

<style>
.el-table {
  margin-top: 6px;
}
.el-table__header-wrapper,
.is-leaf,
.el-table__header {
  height: 60px;
}
th .cell {
  color: rgb(224, 165, 87);
  font-size: 18px;
  line-height: 30px;
  height: 30px;
}
.demo-table-expand {
  font-size: 0;
}
.demo-table-expand label {
  width: 90px;
  color: #99a9bf;
}
.demo-table-expand .el-form-item {
  margin-right: 0;
  margin-bottom: 0;
  width: 50%;
}
.el-main {
  line-height: 0;
}
.cell button {
  margin: 0 5px;
}
</style>