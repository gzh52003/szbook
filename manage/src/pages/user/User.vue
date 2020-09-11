<template>
  <div class="big-box" style="position:relative;padding:30px">
    <el-row>
      <div style="margin: 15px 0 15px 0; width:80%">
        <el-input
          placeholder="请输入内容"
          v-model="search"
          :msg="search"
          v-on:keyup.enter.native="searchmsg(select, search)"
          class="input-with-select"
          ref="aaa"
        >
          <el-select v-model="select" slot="prepend" placeholder="请选择">
            <el-option label="日期" value="日期"></el-option>
            <el-option label="用户名" value="用户名"></el-option>
            <el-option label="描述" value="描述"></el-option>
          </el-select>
          <el-button slot="append" @click="searchmsg(select, search)" icon="el-icon-search"></el-button>
        </el-input>
      </div>
      <el-col>
        <el-button type="success" class="adduser" @click="showadd">添加用户</el-button>
      </el-col>
    </el-row>
    <el-table :data="tableData" border style="width: 100%" :idx="tableData._id" class="tabbody">
      <el-table-column label="日期" align="center" prop="date"></el-table-column>
      <el-table-column label="头像" align="center">
        <template slot-scope="scope" style="width: 100px; height: 100px">
          <!-- {{scope.row}} -->
          <img :src="scope.row.imageUrl" alt style="width:40px;" />
        </template>
      </el-table-column>
      <el-table-column label="用户名" align="center" prop="username"></el-table-column>
      <el-table-column label="描述" align="center" prop="description"></el-table-column>
      <el-table-column label="操作" align="center">
        <template slot-scope="scope">
          <el-button size="mini" @click="useredit(scope.row)">编辑</el-button>
          <el-button size="mini" type="danger" @click="userdelete(scope.row)">删除</el-button>
        </template>
      </el-table-column>
    </el-table>
    <!-- 添加按钮 -->
    <div class="edit-box" id="adduser-box" ref="addoneuser" style="display:none">
      <div class="edittle">新增用户</div>
      <el-upload
        class="avatar-uploader"
        action="http://42.194.179.50/api/upload/singleimg"
        name="goodsImg"
        :show-file-list="false"
        :on-success="handleAvatarSuccess"
        :before-upload="beforeAvatarUpload"
      >
        <img v-if="imageUrl" :src="imageUrl" class="avatar" id="imgactive" />
        <i v-else class="el-icon-plus avatar-uploader-icon"></i>
      </el-upload>
      <el-input placeholder="请输入用户名" v-model="addusername">
        <template slot="prepend">用户名:</template>
      </el-input>
      <el-input
        placeholder="请输入密码"
        @keyup.enter.native="adduser"
        v-model="addpassword"
        show-password
      >
        <template slot="prepend">密&nbsp;&nbsp; 码：</template>
      </el-input>
      <!-- <el-input placeholder="请输入内容" v-model="input1">
          <template slot="prepend">用户名：</template>
      </el-input>-->
      <div class="editbtn">
        <el-button @click="adduser" class="sure" type="success">确定</el-button>
        <el-button @click="canleadd" class="canle" type="danger">取消</el-button>
      </div>
    </div>

    <!-- 编辑按钮 -->
    <main class="editbigbox exitedit" ref="showedit">
      <div class="edit-box">
        <div class="edittle">编辑用户</div>
        <el-upload
          class="avatar-uploader"
          action="http://42.194.179.50/api/upload/singleimg"
          name="goodsImg"
          :show-file-list="false"
          :on-success="handleAvatarSuccess"
          :before-upload="beforeAvatarUpload"
        >
          <img :src="imgpath" class="avatar" id="imgactive" />

          <i class="el-icon-plus avatar-uploader-icon"></i>
          <img :src="imgpath" alt style="positon:absolute;z-index:10;" />
        </el-upload>
        <el-input placeholder="请输入内容" v-model="username" :value="username">
          <template slot="prepend">用户名：</template>
        </el-input>
        <el-input placeholder="请输入内容" v-model="description" @keyup.enter.native="sureedit">
          <template slot="prepend">描述：</template>
        </el-input>
        <!-- <el-input placeholder="请输入内容" v-model="input1">
          <template slot="prepend">用户名：</template>
        </el-input>-->
        <div class="editbtn">
          <el-button @click="sureedit" class="sure" type="success">确定</el-button>
          <el-button @click="canleedit" class="canle" type="danger">取消</el-button>
        </div>
      </div>
    </main>
    <div>
      <template>
        <el-button type="text" @click="openedit"></el-button>
      </template>
    </div>
    <el-pagination
      background
      :data="longpage"
      layout="prev, pager, next"
      :total="longpage*2"
      :current-page.sync="page"
      @current-change="getuserlistBypage"
      style="margin:0 auto;width:255px"
    ></el-pagination>
  </div>
</template>

<script>
async function userlist(page = 1, options = {}) {
  console.log(page);
  if (Object.keys(options).length <= 0 || options.size) {
    console.log(1111);
    if (options.size) {
      console.log("5条数据");
      let result = await fetch(
        `http://42.194.179.50/api/user?page=${page}&size=5`
      ).then((res) => res.json());
      return result;
    } else {
      let result = await fetch(`http://42.194.179.50/api/user`).then((res) =>
        res.json()
      );
      console.log("总长度=", result.length);
      return result;
    }
    // console.log(result);
    // this.tableData = aa;
  } else {
    console.log(2222);
    if (options.typemsg == "用户名") {
      options.type = "username";
      // console.log(options.type);
    } else if (options.typemsg == "描述") {
      options.type = "description";
      // console.log(options.type);
    } else if (options.typemsg == "日期") {
      options.type = "date";
      // console.log(options.type);
    }
    let aa = await fetch(
      `http://42.194.179.50/api/user?page=1&size=5&type=${options.type}&msg=${options.msg}`
    ).then((res) => res.json());
    console.log(aa);
    // this.tableData = aa;
    return aa;
  }
}
async function searchuserlist(page = 1, options = {}) {
  console.log(page);
  if (Object.keys(options).length <= 0) {
    console.log(1111);
    let aa = await fetch(
      `http://42.194.179.50/api/user?page=${page}&size=5`
    ).then((res) => res.json());
    // console.log(aa);
    // this.tableData = aa;
    return aa;
  } else {
    console.log(2222);
    if (options.typemsg == "用户名") {
      options.type = "username";
      // console.log(options.type);
    } else if (options.typemsg == "描述") {
      options.type = "description";
      // console.log(options.type);
    } else if (options.typemsg == "日期") {
      options.type = "date";
      // console.log(options.type);
    }
    let aa = await fetch(
      `http://42.194.179.50/api/user/mohu?page=1&size=5&type=${options.type}&msg=${options.msg}`
    ).then((res) => res.json());
    console.log(aa);
    // this.tableData = aa;
    return aa;
  }
}
export default {
  data() {
    return {
      input1: "",
      input2: "",
      input3: "",
      select: "用户名",
      search: "",
      username: "",
      idx: "",
      description: "",
      longpage: 6,
      page: 1,
      item: "",
      imageUrl: "",
      imgpath: "",
      addusername: "",
      addpassword: "",
      imgpathsend: "",
      imageindex: 0,
      tableData: [
        // {
        //   date: "2016-05-02",
        //   name: "王小虎",
        //   address: "上海市普陀区金沙江路 1518 弄",
        // },
        // {
        //   date: "2016-05-04",
        //   name: "王小虎",
        //   address: "上海市普陀区金沙江路 1517 弄",
        // },
        // {
        //   date: "2016-05-01",
        //   name: "王小虎",
        //   address: "上海市普陀区金沙江路 1519 弄",
        // },
        // {
        //   date: "2016-05-03",
        //   name: "王小虎",
        //   address: "上海市普陀区金沙江路 1516 弄",
        // },
      ],
    };
  },

  methods: {
    // 当页数变化时会触发这个方法
    async getuserlistBypage(page) {
      let result = await userlist(page, { size: 5 });
      this.tableData = result;
      // console.log(result);
    },
    async searchmsg(typemsg, msg) {
      // this.search = this.$refs.aaa;
      // console.log(await this.$refs.aaa.value);
      // console.log(typemsg, msg);
      let result1 = await searchuserlist(1, { typemsg, msg });
      this.tableData = result1;

      // console.log(result1);
    },
    // 无法拿到tableData的每条数据
    // 编辑
    useredit(item) {
      this.$refs.showedit.className = "showedit editbigbox";
      // console.log(item);
      this.username = item.username;
      this.description = item.description;
      this.imgpath = item.imageUrl;
      console.log(this.imgpath);
      // console.log(this.imgpath, item.imageUrl);
      this.idx = item._id;
    },

    async sureedit() {
      // console.log(this.idx, this.description);
      let result = await fetch(`http://42.194.179.50/api/user`, {
        method: "PUT",
        body: JSON.stringify({
          _id: this.idx,
          username: this.username,
          description: this.description,
          imageUrl: this.imgpath,
        }),
        headers: {
          "Content-type": "application/json; charset=UTF-8",
        },
      }).then((res) => res.json());
      if (result.code && result.code == 200) {
        this.tableData = this.tableData.reduce((pre, cur) => {
          // console.log(cur);
          if (cur._id == this.idx) {
            cur.description = this.description;
            cur.username = this.username;
            cur.imageUrl = this.imgpath;
          }

          return pre.concat(cur);
        }, []);
        // console.log(this.tableData);
        this.openedit("编辑成功");
        this.$refs.showedit.className = "exitedit editbigbox";
      } else {
        this.openedit("编辑失败");
      }
      this.imageUrl = "";
    },
    canleedit() {
      this.$refs.showedit.className = "exitedit editbigbox";
    },
    openedit(editcontext) {
      this.$alert(editcontext, "提示信息", {
        confirmButtonText: "确定",
        callback: () => {
          this.$message({
            type: "info",
            message: `action: 完成`,
          });
        },
      });
    },
    //删除
    async userdelete(obj) {
      this.$confirm("此操作将永久删除该用户, 是否继续?", "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning",
      })
        .then(async () => {
          //发送ajax请求，把数据库删掉
          await fetch(`http://42.194.179.50/api/user?_id=${obj._id}`, {
            method: "delete",
          }).then((res) => {
            return res.json();
          });
          if (obj.imageUrl) {
            let rm_url = obj.imageUrl.replace(
              /http:\/\/42.194.179.50:80/,
              ".."
            );
            let res = await fetch(
              `http://42.194.179.50/api/upload/rmimg?rm_url=${rm_url}`,
              {
                method: "delete",
              }
            ).then((res) => res.json);
            console.log(res);
          }

          this.tableData = this.tableData.filter((item) => {
            return item._id != obj._id;
          });
          // console.log(this.tableData);
          this.$message({
            type: "success",
            message: "删除成功!",
          });
          let datalong = await userlist(1);
          this.longpage = datalong.length;
        })
        .catch(() => {
          this.$message({
            type: "info",
            message: "已取消删除",
          });
        });
    },
    // 新增用户
    showadd() {
      this.$refs.addoneuser.style = "display:flex";
    },
    canleadd() {
      this.$refs.addoneuser.style = "display:none";
    },
    async adduser() {
      console.log(this.addusername, this.addpassword, this.imageUrl);
      this.imgpath = this.imageUrl;
      console.log(!/\s/g.test(this.addusername));
      if (
        this.addusername &&
        this.addpassword &&
        !/\s+/g.test(this.addusername) &&
        !/\s+/g.test(this.addpassword)
      ) {
        let result = await fetch("http://42.194.179.50/api/reg", {
          method: "post",
          headers: { "Content-type": "application/json; charset=UTF-8" },
          body: JSON.stringify({
            imageUrl: this.imgpathsend,
            username: this.addusername,
            password: this.addpassword,
          }),
        }).then((res) => res.json());
        console.log(result);
        this.imageUrl = "";
        this.openedit("添加成功");
        if (this.tableData.length % 10) {
          this.tableData = this.tableData.concat({
            imageUrl: this.imgpathsend,
            username: this.addusername,
            password: this.addpassword,
          });
        }

        let datalong = await userlist(1);
        this.longpage = datalong.length;
        this.imgpath = this.imgpathsend;
        console.log(this.imgpath);
        this.addusername = "";
        this.addpassword = "";
        this.canleadd();
      } else {
        this.openedit("添加失败");
      }
    },
    handleAvatarSuccess(res, file) {
      // 图片转为相对路径
      // let imagesunpath = "http://42.194.179.50:80/";
      this.imageUrl = URL.createObjectURL(file.raw);
      this.imgpathsend = file.response.data.uploadUrl;
      console.log(this.imgpathsend);
      console.log(this.imgpathsend);
      this.imgpath = this.imgpathsend;
    },
    beforeAvatarUpload(file) {
      const isJPG = file.type === "image/jpeg";
      const isLt2M = file.size / 1024 / 1024 < 2;

      if (!isJPG) {
        this.$message.error("上传头像图片只能是 JPG 格式!");
      }
      if (!isLt2M) {
        this.$message.error("上传头像图片大小不能超过 2MB!");
      }
      return isJPG && isLt2M;
    },
  },

  // 查看一共数据库一共有多少个相对应的数据
  async created() {
    //判断有无token，如果有，那么就免登录
    // 如果没有传{size:5}那么就会查询全部
    let result = await userlist(1, { size: 5 });
    this.tableData = result;
    console.log("this.tableData", this.tableData);
    let datalong = await userlist(1);
    this.longpage = datalong.length;
    console.log("this.datalong", this.longpage);
    // console.log(this.tableData.length / 2);
    // if (this.tableData.length % 10 != 0) {
    //   let shiwei = (parseInt(this.tableData.length / 10) + 1) * 10;
    //   this.longpage = shiwei;
    // } else {
    //   this.longpage = this.tableData.length;
    // }
    // console.log(this.longpage);
  },
  mounted() {
    // if (this.tableData.length % 10 != 0) {
    //   let shiwei = (parseInt(this.tableData.length / 10) + 1) * 10;
    //   this.longpage = shiwei;
    // } else {
    //   this.longpage = this.tableData.length;
    // }
  },
};
</script>
<style>
#adduser-box {
  height: 400px;
  box-sizing: border-box;
  padding: 12px 20px 6px;
}
.showedit {
  display: block;
}
.exitedit {
  display: none;
}
.editbigbox {
  width: 104%;
  height: 176%;
  position: absolute;
  left: -2%;
  top: -7%;
  background-color: #555;
  z-index: 444;
}
.editbtn {
  width: 200px;
  margin: 0 auto;
  display: flex;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.edit-box {
  width: 500px;
  position: absolute;
  height: 400px;
  left: 32%;
  top: 22%;
  margin: 0 auto;
  background-color: #f5f5f5;
  box-sizing: border-box;
  padding: 0 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-content: center;
}
.edittle {
  font-size: 16px;
  color: rgb(2, 2, 2);
  font-weight: 500;
}
.caozuo {
  right: 50px;
}
.el-select .el-input {
  width: 120px;
}
.input-with-select .el-input-group__prepend {
  background-color: #fff;
}
.tabbody {
  min-height: 400px;
}
.el-main {
  line-height: 40px;
}
.el-row,
.el-col-24 {
  position: relative;
}
.adduser {
  position: absolute;
  right: 10px;
  top: -53px;
  width: 66px;
  height: 36px;
  text-align: center;
  z-index: 2;
  padding: 0;
}
.el-row .adduser {
  font-size: 12px;
  padding: 0;
}
.is-leaf,
.has-gutter,
.el-table__header-wrapper {
  height: 80px;
  padding-top: 0;
}

.avatar-uploader .el-upload {
  border: 1px dashed #d9d9d9;
  border-radius: 6px;
  cursor: pointer;
  /* position: relative; */
  overflow: hidden;
}
.avatar-uploader {
  width: 400px;
  height: 100px;
  margin: 0 auto;
}
.el-upload {
  width: 100px;
  height: 100px;
  left: 150px;
}
#imgactive {
  width: 100%;
  height: 100%;
}
.avatar-uploader .el-upload:hover {
  border-color: #409eff;
}
.el-upload .avatar-uploader-icon {
  font-size: 28px;
  color: #8c939d;
  width: 100px;
  height: 100px;
  line-height: 100px;
  text-align: center;
  line-height: 100px;
}

.avatar {
  width: 178px;
  height: 178px;
  display: block;
}

.el-row .el-input .el-input-group__append {
  padding: 0 20px;
}
</style>
