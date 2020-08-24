<template>
  <div class="user">
    <el-table
      :data="books"
      max-height="590"
      border
      size="small"
      highlight-current-row
      style="width: 100%"
    >
      <el-table-column type="expand">
        <template slot-scope="props">
          <el-form label-position="left" inline class="book_info demo-table-expand">
            <el-form-item label="出版社">
              <span>{{ props.row.public }}</span>
            </el-form-item>
            <el-form-item label="IBSN">
              <span>{{ props.row.isbn }}</span>
            </el-form-item>
            <el-form-item label="出版时间">
              <span>{{ props.row.time }}</span>
            </el-form-item>
            <el-form-item label="市场价">
              <span>{{ props.row.price }}</span>
            </el-form-item>
            <el-form-item label="图片">
              <el-image
                style="width: 100px; height: 100px"
                :src="urlImg(props.row.img)"
                :fit="cover"
              ></el-image>
            </el-form-item>
          </el-form>
        </template>
      </el-table-column>
      <el-table-column label="商品 ID" width="200" prop="_id"></el-table-column>
      <el-table-column label="书籍名称" width="200" prop="bookName"></el-table-column>
      <el-table-column label="作者" width="150" prop="author"></el-table-column>
      <el-table-column label="价格" width="100" prop="line_price"></el-table-column>
      <el-table-column label="库存" width="100" prop="num"></el-table-column>
      <el-table-column label="描述" width="380" prop="desc"></el-table-column>
      <el-table-column fixed="right" width="160">
        <template slot="header" slot-scope="scope">
          <el-input v-model="searchText" @input="search(scope)" size="mini" placeholder="输入书籍名称搜索" />
        </template>
        <template slot-scope="scope">
          <el-button size="mini" @click="handleEdit(scope.$index, scope.row)">编辑</el-button>
          <el-button size="mini" type="danger" @click="handleDelete(scope.row)">删除</el-button>
        </template>
      </el-table-column>
    </el-table>
    <el-pagination
      style="padding-top:16px"
      layout="prev, pager, next, jumper"
      @current-change="changePage"
      :current-page="currentPage"
      :total="180"
    ></el-pagination>
  </div>
</template>
<script>
export default {
  data() {
    return {
      books: [],
      searchText: "",
      currentPage: 1,
      searchString: [],
    };
  },
  methods: {
    urlImg(_url) {
      let Imgurl = _url.slice(3);
      Imgurl = "http://42.194.179.50/" + Imgurl;
      return Imgurl;
    },
    changePage() {
      let page = document.querySelector(".active").innerHTML;
      this.getbook({ page, size: 10 });
    },
    handleEdit(_id) {
      console.log(_id);
    },
    handleDelete(id) {
      if(confirm("确定删除？")){
        const _id = id._id
        fetch("http://42.194.179.50/api/goods/"+_id,{method:"delete"}).then(res=>res.json()).then(()=>{
          this.books = this.books.filter(el=>el._id!==_id);
        })
      }
    },
    search() {
      if (this.searchText) {
        let reg = new RegExp(this.searchText);
          this.getbook({ page: 1, size: 200, noShow: true });
          this.books = this.searchString.filter((el) =>
            el.bookName.match(reg)
          );
      } else {
        this.getbook();
      }
    },
    getbook(options = {}) {
      fetch(
        `http://42.194.179.50/api/goods?page=${
          options.page ? options.page : 1
        }&size=${options.size ? options.size : 10}`
      )
        .then((res) => res.json())
        .then((data) => {
          if (options.noShow) {
            this.searchString = data.data;
          } else {
            this.books = data.data;
          }
        });
    },
  },
  mounted() {
    this.getbook();
    this.getbook({ page: 1, size: 200, noShow: true });
  },
};
</script>

<style>
.user .el-table {
  margin-top: 6px;
}
.user .cell {
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap !important;
}
.user .el-table__header-wrapper,
.user .is-leaf,
.user .el-table__header {
  height: 60px;
}
.user th .cell {
  color: rgb(224, 165, 87);
  font-size: 16px;
  line-height: 30px;
  height: 30px;
}
.user .demo-table-expand {
  font-size: 0;
}
.user .demo-table-expand label {
  width: 90px;
  color: #99a9bf;
}
.user .demo-table-expand .el-form-item {
  margin-right: 0;
  margin-bottom: 0;
  width: 50%;
}
.el-main {
  line-height: 0;
}
.user .cell button {
  margin: 0 5px;
}
.user .book_info {
  height: 200px;
}
.user .el-table__row td:nth-of-type(3) .cell {
  width: 200px;
}
</style>