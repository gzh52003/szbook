<template>
  <div class="loginBox">
    <el-main>
      <el-form :model="ruleForm" ref="ruleForm" :rules="rule" class="loginform" label-width="0">
        <h3 class="login-text" style="line-height:2rem">欢迎-登录</h3>
        <el-form-item prop="tel">
          <el-input type="text" v-model="ruleForm.username" placeholder="用户名"></el-input>
        </el-form-item>
        <el-form-item prop="password">
          <el-input type="password" v-model="ruleForm.password" placeholder="密码"></el-input>
        </el-form-item>
        <el-form-item prop="password">
          <el-input placeholder="输入验证码" v-model="ruleForm.vcode">
            <el-button slot="append" style="width:150px;z-index:10;padding:0;margin: 0;" @click="getAuthCode" v-html="svg_vcode">点击获取验证码</el-button>
          </el-input>
        </el-form-item>
        <el-form-item style="margin:10px auto">
          <el-button
            type="primary"
            class="submitBtn"
            round
            @click.native.prevent="submit"
          >登录</el-button>
          <hr />
          <p style="font-size:0.2rem">
            暂无
            <span style="color:#56ac67;font-size:0.2rem">“深圳书城后台管理系统”账号</span>， 马上
            <span class="to" @click="toreg">注册</span>
          </p>
        </el-form-item>
      </el-form>
    </el-main>
  </div>
</template>

<script>
export default {
  data() {
    let validatePass = (rule, value, callback) => {
      if (value === "") {
        return callback(new Error("密码不能为空"));
      } else {
        return callback();
      }
    };
    let checkAge = (rule, value, callback) => {
      if (value === "") {
        return callback(new Error("账号不能为空"));
      } else if (/\s+/g.test(value)) {
        return callback(new Error("正则填写用户名"));
      } else {
        callback();
      }
    };
    return {
      ruleForm: {
        password: "",
        username: "",
        vcode: "",
        mdl: false,
      },
      svg_vcode:"",
      sendAuthCode: true /*布尔值，通过v-show控制显示‘获取按钮’还是‘倒计时’ */,
      auth_time: 0 /*倒计时 计数器*/,
      verification: "", //绑定输入验证码框框
      rule: {
        password: [
          {
            required: true,
            validator: validatePass,
            message: "密码不能为空！",
            trigger: "blur",
          },
        ],
        tel: [
          {
            required: true,
            validator: checkAge,
            message: "账号不能为空！",
            trigger: "blur",
          },
        ],
        // 验证码
      },
    };
  },
  methods: {
    //   验证 码
    getAuthCode() {
      fetch("http://42.194.179.50/api/vcode").then(res=>res.json()).then(data=>{
        this.svg_vcode = data.data
      })
    },
    toreg() {
      //没有账号，跳转到注册页面
      // console.log(this.$router)
      this.$router.push("/reg");
    },
    // 封装注册发送请求方法
    thisAjax() {
      const passwordData = this.ruleForm.password;
      const phoneData = this.ruleForm.tel;
      const mCodeData = this.verification;
      const self = this;
      //登录接口需要修改，此处为注册的接口
      const url = "http://42.194.179.50/api/reg";
      fetch(url, {
        method: "post",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
        body: {
          passwordData,
          phoneData,
          mCodeData,
        },
      }).then(
        function (response) {
          //登录后跳转的页面--首页
          console.log("跳转", response);
          // this.$router.push("/");
          self.$router.replace("/home");
        },
        function (error) {
          alert("请求失败", error);
        }
      );
    },
    submit() {
      this.$refs.ruleForm.validate((valid) => {
        if (valid) {
          let queryStr = "";
          for (const key in this.ruleForm) {
            queryStr+=key;
           queryStr+="=";
           queryStr+=this.ruleForm[key];
           queryStr+="&";
          }
          queryStr = queryStr.substr(0,queryStr.length-1)
          // queryStr = queryStr.split("");
          // queryStr.pop();
          // queryStr = queryStr.join("")
          console.log(this.ruleForm);
          fetch(`http://42.194.179.50/api/login?${queryStr}`).then(res=>res.json()).then(data=>{
            console.log(data);
          })
          // console.log("开始写入后台数据！");
        } else{
          this.$message.error("请完整输入内容！")
        }
      });
    },
    reset() {
      this.$refs.ruleForm.resetFields();
    },
  },
  created(){
    this.getAuthCode();
  }
};
</script>

<style>
html,
body {
  width: 100%;
  height: 100%;
}
.el-main {
  width: 100%;
  height: 100%;
}
.loginBox {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 100;
}
.loginform {
  margin: 0 auto;
  min-width: 300px;
  width: 39%;
  max-height: 600px;
  height: 55%;
  background: #fff;
  box-shadow: 0 0 10px #b4bccc;
  padding: 30px 30px 0 30px;
  border-radius: 20px;
}
.submitBtn {
  width: 100%;
}
.to {
  color: #fa5555;
  cursor: pointer;
}
.auth_input {
  width: 140px;
  height: 38px;
  margin-bottom: 20px;
  border: 1px solid #dcdfe6;
  padding-left: 10px;
  border-radius: 8%;
}

.login-text {
  text-align: center;
  margin-bottom: 20px;
  color: #409eff;
}

.loginBox .el-form-item {
  min-width: 300px;
  width: 60%;
  margin: 22px auto;
  max-width: 500px;
}
.el-input .el-input-group__append{
  padding: 0;
  border: none;
}
.el-button{
  height: 40px;
}
svg{
  height: 40px;
}
</style>