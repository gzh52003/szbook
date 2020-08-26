<template>
  <div class="big-box" style="position:relative">
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
            <el-option label="姓名" value="姓名"></el-option>
            <el-option label="描述" value="描述"></el-option>
          </el-select>
          <el-button slot="append" @click="searchmsg(select, search)" icon="el-icon-search"></el-button>
        </el-input>
      </div>
      <el-col>
        <el-button type="success" class="adduser">添加用户</el-button>
      </el-col>
    </el-row>
    <el-table :data="tableData" border style="width: 100%" :idx="tableData._id" class="tabbody">
      <el-table-column label="日期" align="center" prop="date"></el-table-column>
      <el-table-column label="姓名" align="center" prop="username"></el-table-column>
      <el-table-column label="描述" align="center" prop="description"></el-table-column>
      <el-table-column label="操作" align="center">
        <template slot-scope="scope">
          <el-button size="mini" @click="useredit(scope.row)">编辑</el-button>
          <el-button size="mini" type="danger" @click="userdelete(scope.row)">删除</el-button>
        </template>
      </el-table-column>
    </el-table>
    <!-- 编辑按钮 -->
    <main class="editbigbox exitedit" ref="showedit">
      <div class="edit-box">
        <div class="edittle">编辑用户</div>
        <el-input placeholder="请输入内容" :value="username">
          <template slot="prepend">姓名：</template>
        </el-input>
        <el-input placeholder="请输入内容" v-model="description" @keyup.enter.native="sureedit">
          <template slot="prepend">描述：</template>
        </el-input>
        <!-- <el-input placeholder="请输入内容" v-model="input1">
          <template slot="prepend">姓名：</template>
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
      layout="prev, pager, next"
      :total="1000"
      :current-page.sync="page"
      @current-change="getuserlistBypage"
      style="margin:0 auto;width:407px"
    ></el-pagination>
  </div>
</template>

<script>
async function userlist(page = 1, options = {}) {
  console.log(page);
  if (Object.keys(options).length <= 0) {
    console.log(1111);
    let result = await fetch(
      `http://42.194.179.50/api/user?page=${page}&size=10`
    ).then((res) => res.json());
    // console.log(result);
    // this.tableData = aa;
    return result;
  } else {
    console.log(2222);
    if (options.typemsg == "姓名") {
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
      `http://42.194.179.50/api/user?page=1&size=10&type=${options.type}&msg=${options.msg}`
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
      `http://42.194.179.50/api/user?page=${page}&size=10`
    ).then((res) => res.json());
    // console.log(aa);
    // this.tableData = aa;
    return aa;
  } else {
    console.log(2222);
    if (options.typemsg == "姓名") {
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
      `http://42.194.179.50/api/user/mohu?page=1&size=10&type=${options.type}&msg=${options.msg}`
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
      select: "姓名",
      search: "",
      username: "",
      idx: "",
      description: "",
      page: 1,
      item: "",
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
      let result = await userlist(page);
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
      this.idx = item._id;
    },
    async sureedit() {
      // console.log(this.idx, this.description);
      let result = await fetch(`http://42.194.179.50/api/user`, {
        method: "PUT",
        body: JSON.stringify({ _id: this.idx, description: this.description }),
        headers: {
          "Content-type": "application/json; charset=UTF-8",
        },
      }).then((res) => res.json());
      if (result.code && result.code == 200) {
        this.tableData = this.tableData.reduce((pre, cur) => {
          // console.log(cur);
          if (cur._id == this.idx) {
            cur.description = this.description;
          }
          return pre.concat(cur);
        }, []);
        // console.log(this.tableData);
        this.openedit("编辑成功");
      } else {
        this.openedit("编辑失败");
      }
      this.$refs.showedit.className = "exitedit editbigbox";
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
          this.tableData = this.tableData.filter((item) => {
            return item._id != obj._id;
          });
          // console.log(this.tableData);
          this.$message({
            type: "success",
            message: "删除成功!",
          });
        })
        .catch(() => {
          this.$message({
            type: "info",
            message: "已取消删除",
          });
        });
    },
  },
  async created() {
    //判断有无token，如果有，那么就免登录
    let result = await userlist(1);
    this.tableData = result;
  },
};
</script>
<style>
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
  height: 300px;
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
</style>
