<template>
  <el-table :data="tableData" style="width: 100%">
    <el-table-column type="expand">
      <template slot-scope="props">
        <el-form label-position="left" inline class="demo-table-expand">
          <el-form-item label="姓名">
            <span>{{ props.row.name }}</span>
          </el-form-item>
          <el-form-item label="性别">
            <span>{{ props.row.shop }}</span>
          </el-form-item>
          <el-form-item label="出生日期">
            <span>{{ props.row.id }}</span>
          </el-form-item>
          <el-form-item label="年龄">
            <span>{{ props.row.shopId }}</span>
          </el-form-item>
          <el-form-item label="手机号码">
            <span>{{ props.row.category }}</span>
          </el-form-item>
          <el-form-item label="职业">
            <span>{{ props.row.address }}</span>
          </el-form-item>
          <el-form-item label="描述自我">
            <span>{{ props.row.desc }}</span>
          </el-form-item>
        </el-form>
      </template>
    </el-table-column>
    <el-table-column label="注册日期" prop="id"></el-table-column>
    <el-table-column label="姓名" prop="name"></el-table-column>
    <el-table-column label="性别" prop="desc"></el-table-column>
  </el-table>
</template>

<style>
.demo-table-expand {
  font-size: 0;
}
.demo-table-expand label {
  width: 90px;
  height: 100px;
  color: #99a9bf;
}
.demo-table-expand .el-form-item {
  margin-right: 0;
  margin-bottom: 0;
  width: 50%;
}
.is-leaf {
  height: 100px;
}
</style>

<script>
export default {
  data() {
    return {
      tableData: [
        {
          id: "12987122",
          name: "好滋好味鸡蛋仔",
          category: "江浙小吃、小吃零食",
          desc: "荷兰优质淡奶，奶香浓而不腻",
          address: "上海市普陀区真北路",
          shop: "王小虎夫妻店",
          shopId: "10333",
        },
        {
          id: "12987123",
          name: "好滋好味鸡蛋仔",
          category: "江浙小吃、小吃零食",
          desc: "荷兰优质淡奶，奶香浓而不腻",
          address: "上海市普陀区真北路",
          shop: "王小虎夫妻店",
          shopId: "10333",
        },
        {
          id: "12987125",
          name: "好滋好味鸡蛋仔",
          category: "江浙小吃、小吃零食",
          desc: "荷兰优质淡奶，奶香浓而不腻",
          address: "上海市普陀区真北路",
          shop: "王小虎夫妻店",
          shopId: "10333",
        },
        {
          id: "12987126",
          name: "好滋好味鸡蛋仔",
          category: "江浙小吃、小吃零食",
          desc: "荷兰优质淡奶，奶香浓而不腻",
          address: "上海市普陀区真北路",
          shop: "王小虎夫妻店",
          shopId: "10333",
        },
      ],
    };
  },
};
</script>
<style>
el-main {
  line-height: 0;
}
.has-gutter,
.el-table__header,
.el-table__header-wrapper {
  height: 100px;
  line-height: 0;
}
.demo-table-expand {
  height: 300px;
  display: flex;
  flex-direction: column;
  justify-content: center;
}
.el-form-item,
.el-form-item__label {
  height: 40px;
  line-height: 0;
}
</style>
