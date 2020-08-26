<template>
  <el-form
    :model="book"
    :rules="rules"
    ref="book"
    label-width="100px"
    class="demo-book"
    style="padding-top:6px"
  >
    <el-form-item label="书籍名称" prop="bookName">
      <el-input v-model="book.bookName"></el-input>
    </el-form-item>
    <el-form-item label="ISBN" prop="isbn">
      <el-input v-model.number="book.isbn"></el-input>
    </el-form-item>
    <el-form-item label="作者" prop="author">
      <el-input v-model="book.author"></el-input>
    </el-form-item>
    <el-form-item label="市场价">
      <el-input v-model.number="book.price"></el-input>
    </el-form-item>
    <el-form-item label="上线价格">
      <el-input v-model.number="book.line_price"></el-input>
    </el-form-item>
    <el-form-item label="库存">
      <el-input v-model.number="book.num"></el-input>
    </el-form-item>
    <el-form-item label="出版社" style="width:260px">
      <el-select v-model="book.public" filterable placeholder="请选择出版社">
        <el-option
          v-for="item in options"
          :key="item.value"
          :label="item.label"
          :value="item.value"
        ></el-option>
      </el-select>
    </el-form-item>
    <el-form-item label="出版时间">
      <el-col style="width:160px;padding: 0;">
        <el-form-item prop="date1">
          <el-date-picker type="date" placeholder="选择日期" v-model="book.time"></el-date-picker>
        </el-form-item>
      </el-col>
    </el-form-item>
    <el-form-item label="上架商品">
      <el-switch v-model="book.on_line"></el-switch>
    </el-form-item>
    <el-form-item label="描述">
      <el-input type="textarea" v-model="book.desc"></el-input>
    </el-form-item>
    <el-form-item label="上传图片">
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
    </el-form-item>
    <el-form-item>
      <el-button type="primary" @click="submitGoods">立即创建</el-button>
    </el-form-item>
  </el-form>
</template>
<script>
export default {
  data() {
    return {
      book: {
        bookName: "",
        desc: "",
        author: "",
        public: "",
        isbn: "",
        time: "",
        price: 0,
        line_price: 0,
        num: 0,
        img: "",
        on_line: false,
      },
      options: [
        {
          value: "湖南文艺",
          label: "湖南文艺",
        },
        {
          value: "上海文艺",
          label: "上海文艺",
        },
        {
          value: "上海三联",
          label: "上海三联",
        },
        {
          value: "台海",
          label: "台海",
        },
        {
          value: "云南人民",
          label: "云南人民",
        },
        {
          value: "人民文学",
          label: "人民文学",
        },
        {
          value: "浙江人民",
          label: "浙江人民",
        },
        {
          value: "新星",
          label: "新星",
        },
        {
          value: "北京联合",
          label: "北京联合",
        },
        {
          value: "中信",
          label: "中信",
        },
        {
          value: "浙江教育",
          label: "浙江教育",
        },
      ],
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
      rmimg: true,
    };
  },
  methods: {
    before_Upload(file) {
      const isJPG = [
        "image/jpeg",
        "image/jpg",
        "image/png",
        "image/gif",
      ].includes(file.type);
      const isLt2M = file.size / 1024 / 1024 < 2;
      if (!isJPG) {
        this.$message.error("上传头像图片只能是 JPG 格式!");
      }
      if (!isLt2M) {
        this.$message.error("上传头像图片大小不能超过 2MB!");
      }
      return isJPG && isLt2M;
    },
    suc(response) {
      this.book.img = response.data.uploadUrl;
    },
    handleRemove() {
      fetch(
        `http://42.194.179.50/api/upload/rmimg?rm_url=${this.book.urlImg}`,
        {
          method: "delete",
        }
      )
    },
    submitGoods() {
      if (this.book.bookName && this.book.author && this.book.isbn) {
        fetch("http://42.194.179.50/api/goods/", {
          method: "post",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(this.book),
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.code == 1) {
              this.rmimg = false;
              this.$router.replace("/goods/list")
            } else {
              this.$message.error("创建失败，请重新创建！");
            }
          });
      } else {
        this.$message.error("带 * 的信息为必填！");
      }
    },
  },
  beforeDestroy() {
    if (this.rmimg && this.book.urlImg) {
      this.handleRemove();
    }
  },
};
</script>

<style>
.el-form {
  height: 100%;
  overflow-y: auto;
}
.el-form-item {
  width: 600px;
}
.avatar-uploader .el-upload {
  border: 1px dashed #d9d9d9;
  border-radius: 6px;
  cursor: pointer;
  position: relative;
  overflow: hidden;
}
.avatar-uploader .el-upload:hover {
  border-color: #409eff;
}
.avatar-uploader-icon {
  font-size: 28px;
  color: #8c939d;
  width: 178px;
  height: 178px;
  line-height: 178px;
  text-align: center;
}
.avatar {
  width: 178px;
  height: 178px;
  display: block;
}
.demo-block .avatar-uploader .avatar-uploader-icon {
  font-size: 28px;
  color: #8c939d;
  width: 178px;
  height: 178px;
  line-height: 178px;
  text-align: center;
}
</style>