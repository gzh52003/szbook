<template>
  <el-form
    :model="book"
    :rules="rules"
    ref="book"
    label-width="100px"
    class="demo-book"
    style="padding-top:6px"
  >
    <el-form-item label="书籍名称" prop="name">
      <el-input v-model="book.name"></el-input>
    </el-form-item>
    <el-form-item label="上传图片" required>
      <el-upload
        action="https://jsonplaceholder.typicode.com/posts/"
        list-type="picture-card"
        :on-preview="handlePictureCardPreview"
        :on-remove="handleRemove"
        limit:1
      >
        <i class="el-icon-plus"></i>
      </el-upload>
      <el-dialog :visible.sync="dialogVisible">
        <img width="100%" :src="book.imgUrl" alt />
      </el-dialog>
    </el-form-item>
    <el-form-item label="作者" prop="authod">
      <el-input v-model="book.authod"></el-input>
    </el-form-item>
    <el-form-item label="价格" prop="pic">
      <el-input v-model.number="book.pic"></el-input>
    </el-form-item>
    <el-form-item label="库存" prop="num">
      <el-input v-model.number="book.num"></el-input>
    </el-form-item>
    <el-form-item label="出版社" required style="width:260px">
      <el-select v-model="value" filterable placeholder="请选择出版社">
        <el-option
          v-for="item in options"
          :key="item.value"
          :label="item.label"
          :value="item.value"
        ></el-option>
      </el-select>
    </el-form-item>
    <el-form-item label="出版时间" required>
      <el-col style="width:160px;padding: 0;">
        <el-form-item prop="date1">
          <el-date-picker
            type="date"
            placeholder="选择日期"
            v-model="book.time"
          ></el-date-picker>
        </el-form-item>
      </el-col>
    </el-form-item>
    <el-form-item label="上架商品">
      <el-switch v-model="book.on_line"></el-switch>
    </el-form-item>
    <el-form-item label="描述" prop="desc">
      <el-input type="textarea" v-model="book.desc"></el-input>
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
        id:"",
        name: "",
        desc: "",
        author: "",
        public:'',
        isbn: "",
        time: "",
        pic: "",
        line_pic: "",
        num:"",
        urlImg:"",
        on_line: false,
      },
      value: "",
      dialogImageUrl: "",
      dialogVisible: false,
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
        name: [
          { required: true,type:'string', message: "请输入活动名称", trigger: "blur" }
        ],
        authod: [{ required: true, message: "请输入作者名称", trigger: "blur" }],
        pic:[
          { required: true,message: "请输入价格" , trigger: "blur"},
          {type:'number', message: "请输入数字值"}
          ],
        num:[
          { required: true,message: "请输入库存", trigger: "blur" },
          {type:'number', message: "请输入数字"}
          ],
        desc: [{ required: true, message: "描述不能为空", trigger: "blur" }],
      },
    };
  },
  methods: {
    submitGoods() {
      this.$request.post("/goods",this.book)
      .then(response => (this.info = response))
      .catch(function (error) {
        console.log(error);
      });
    },
    resetForm(formName) {
      this.$refs[formName].resetFields();
    },
    handleRemove(file, fileList) {
      console.log(file, fileList);
    },
    handlePictureCardPreview(file) {
      this.dialogImageUrl = file.url;
      this.dialogVisible = true;
    },
  },
};
</script>

<style>
.el-form{
  height: 590px;
  overflow-y: auto;
}
.el-form-item{
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
</style>