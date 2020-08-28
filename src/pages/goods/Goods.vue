<template>
  <div class="user" style="padding-top:28px">
    <el-table :data="books" border size="small" highlight-current-row style="width: 100%">
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
              <el-image style="width: 100px; height: 100px" :src="urlImg(props.row.img)"></el-image>
            </el-form-item>
          </el-form>
        </template>
      </el-table-column>
      <el-table-column label="商品 ID" width="200" prop="_id" :resizable='false'></el-table-column>
      <el-table-column label="书籍名称" width="200" prop="bookName" show-overflow-tooltip :resizable='false'></el-table-column>
      <el-table-column label="作者" width="150" prop="author" show-overflow-tooltip :resizable='false'></el-table-column>
      <el-table-column label="价格" width="100" prop="line_price" :resizable='false'></el-table-column>
      <el-table-column label="库存" width="100" prop="num" :resizable='false'></el-table-column>
      <el-table-column label="描述" width="380" prop="desc" :resizable='false'></el-table-column>
      <el-table-column fixed="right" width="160" :resizable='false'>
        <template slot="header" slot-scope="scope">
          <el-input
            v-model="searchText"
            @input="search(scope)"

            size="mini"
            placeholder="输入书籍名称搜索"
          />
        </template>
        <template slot-scope="scope">
          <el-button size="mini" @click="handleEdit(scope.row)">编辑</el-button>
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
    <el-dialog title="编辑信息" :visible.sync="dialogFormVisible">
      <el-form :model="form">
        <el-form-item label="书籍名称" prop="bookName" :label-width="formLabelWidth">
          <el-input v-model="form.bookName"></el-input>
        </el-form-item>
        <el-form-item label="ISBN" prop="isbn" :label-width="formLabelWidth">
          <el-input v-model.number="form.isbn"></el-input>
        </el-form-item>
        <el-form-item label="作者" prop="author" :label-width="formLabelWidth">
          <el-input v-model="form.author"></el-input>
        </el-form-item>
        <el-form-item label="市场价" :label-width="formLabelWidth">
          <el-input v-model.number="form.price"></el-input>
        </el-form-item>
        <el-form-item label="上线价格" :label-width="formLabelWidth">
          <el-input v-model.number="form.line_price"></el-input>
        </el-form-item>
        <el-form-item label="库存" :label-width="formLabelWidth">
          <el-input v-model.number="form.num"></el-input>
        </el-form-item>
        <el-form-item label="出版社" :label-width="formLabelWidth">
          <el-input v-model="form.public"></el-input>
        </el-form-item>
        <el-form-item label="出版时间" :label-width="formLabelWidth">
          <el-col style="width:160px;padding: 0;">
            <el-form-item prop="date1">
              <el-date-picker type="date" placeholder="选择日期" v-model="form.time"></el-date-picker>
            </el-form-item>
          </el-col>
        </el-form-item>
        <el-form-item label="上架商品" :label-width="formLabelWidth">
          <el-switch v-model="form.on_line"></el-switch>
        </el-form-item>
        <el-form-item label="描述" :label-width="formLabelWidth">
          <el-input type="textarea" v-model="form.desc"></el-input>
        </el-form-item>
        <!-- <el-form-item label="上传图片" :label-width="formLabelWidth">
          <el-upload
            action="http://42.194.179.50/api/upload/singleimg"
            list-type="picture-card"
            name="goodsImg"
            :limit="1"
            :on-success="suc"
            :on-remove="handleRemove"
            :before-upload="before_Upload"
          >
            <i class="el-icon-plus"></i>
            <div slot="tip" class="el-upload__tip">只能上传jpg/png/gif文件，且不超过2M</div>
          </el-upload> 
        </el-form-item>-->
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="dialogFormVisible = false">取 消</el-button>
        <el-button type="primary" @click="update">确 定</el-button>
      </div>
    </el-dialog>
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
      dialogFormVisible: false,
      form: {
        name: "",
        region: "",
        date1: "",
        date2: "",
        delivery: false,
        type: [],
        resource: "",
        desc: "",
      },
      formLabelWidth: "120px",
      options: "",
      rules: {
        bookName: [
          { required: true, message: "请输入商品名称", trigger: "blur" },
        ],
        isbn: [
          { required: true, message: "ISBN不能为空", trigger: "blur" },
          {
            required: true,
            type: "number",
            message: "请正确填写ISBN值",
            trigger: "blur",
          },
        ],
        author: [
          { required: true, message: "请输入作者名称", trigger: "blur" },
        ],
      },
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
    handleEdit(book) {
      this.dialogFormVisible = true;
      this.form = book;
    },
    update() {
      this.dialogFormVisible = false;
      fetch("http://42.194.179.50/api/goods/",{
        method:"put",
        headers:{ "Content-Type": "application/json" },
        body:JSON.stringify(this.form)
        })
    },
    handleDelete(id) {
      if (this.$confirm("确定删除？")) {
        const { _id, img } = id;
        fetch("http://42.194.179.50/api/goods/" + _id, { method: "delete" })
          .then((res) => res.json())
          .then(() => {
            this.books = this.books.filter((el) => el._id !== _id);
          });
        if (img == "../images/szbook/fa.jpg") {
          return;
        }
        fetch(`http://42.194.179.50/api/upload/rmimg?rm_url=${img}`, {
          method: "delete",
        });
      }
    },
    search() {
      if (this.searchText) {
        let reg = new RegExp(this.searchText);
        this.getbook({ page: 1, size: 200, noShow: true });
        this.books = this.searchString.filter((el) =>
          (el.bookName + "").match(reg)
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
.user {
  max-height: 100%;
  overflow: auto;
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
  height: 25%;
}
.user .el-table__row td:nth-of-type(3) .cell {
  width: 200px;
}
</style>