<template>
  <div class="regBox">
    <el-main>
      <el-form :model="ReginForm" ref="ReginForm" :rules="rule" class="regform" label-width="0">
        <h3 class="reg-text" style="line-height:2rem">免费-注册</h3>
        <el-form-item prop="tel">
          <el-input type="text" v-model="ReginForm.tel" placeholder="用户名" @blur="fr"></el-input>
        </el-form-item>
        <el-form-item prop="password">
          <el-input type="password" v-model="ReginForm.password" placeholder="密码"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="success" class="submitBtn" round @click.native.prevent="submit">注册</el-button>
          <hr />
          <p style="font-size:0.2rem">
            已有
            <span style="color:#56ac67">“深圳书城后台管理系统”账号</span>，马上
            <span class="to" @click="tologin">登录</span>
          </p>
        </el-form-item>
      </el-form>
    </el-main>
  </div>
</template>

<script>
export default {
  data() {
    var confirmpasswordCheck = (rule, value, callback) => {
      if (value === "") {
        return callback(new Error("密码不能为空"));
      } else {
        return callback();
      }
    };
    // console.log(confirmpasswordCheck);
    var telCheck = (rule, value, callback) => {
      if (!value === "") {
        return callback(new Error("账号不能为空"));
      } else if (/\s+/g.test(value)) {
        return callback(new Error("正确填写用户名"));
      } else {
        callback();
      }
    };
    var checkName = (rule, value, callback)=>{
      this.num += 1;
      console.log(this.ok);
      if(this.num==1){
        return
      }
      if (!this.okReg) {
        console.log(this.logining);
        return callback(new Error("用户名存在！"));
      }else{
        callback();
      }
    };
    return {
      ReginForm: {
        password: "",
        tel: "",
      },
      num:0,
      okReg:false,
      logining: false,
      sendAuthCode: true /*布尔值，通过v-show控制显示‘获取按钮’还是‘倒计时’ */,
      auth_time: 0 /*倒计时 计数器*/,
      verification: "", //绑定输入验证码框框
      rule: {
        password: [
          {
            required: true,
            validator: confirmpasswordCheck,
            message: "密码不能为空！",
            trigger: "blur",
          },
        ],
        tel: [
          {
            required: true,
            validator: telCheck,
            message: "账号不能为空！",
            trigger: "blur",
          },
          {
            validator: checkName,
            message: "账号已存在，请重新填写！",
            trigger: "blur",
          },
        ],
      },
    };
  },
  methods: {
    fr() {
      // 去重用户接口
      const url = "http://42.194.179.50/api/reg/check";
      // console.log('用户名是否重复url：',url);

      fetch(`${url}?username=${this.ReginForm.tel}`, {
        headers: {
          "Content-Type": "application/json",
        },
      })
        .then((res) => res.json())
        .then((data) => {
          console.log("去重：", data);
          if (data.code == '1') {
            this.okReg = true;
          } else {
            this.okReg = false;
            this.$message.error("账号已存在！");
          }
        });
    },

    //   验证 码
    getAuthCode: function () {
      const verification = this.ReginForm.tel;
      console.log(verification);
      const url = " ";
      // console.log("url", url);
      this.$http.get(url).then(
        function (response) {
          console.log("请求成功", response);
        },
        function (error) {
          console.log("请求失败", error);
        }
      );
      this.sendAuthCode = false;

      this.auth_time = 10; //设置倒计时秒
      var auth_timetimer = setInterval(() => {
        this.auth_time--;
        if (this.auth_time <= 0) {
          this.sendAuthCode = true;
          clearInterval(auth_timetimer);
        }
      }, 1000);
    },
    tologin() {
      //已经注册过跳转到登入界面
      // console.log(this.$router)
      this.$router.push("/login");
    },
    // 封装注册发送请求方法
    thisAjax() {
      const password = this.ReginForm.password;
      const username = this.ReginForm.tel;
      const mCodeData = this.verification;
      const self = this;

      // 注册接口
      const url = "http://42.194.179.50/api/reg";
      fetch(url, {
        method: "post",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          password,
          username,
          mCodeData,
        }),
      }).then(
        function (response) {
          //注册后跳转的页面
          console.log("跳转", response);
          // this.$router.push("/");
          self.tologin();
        },
        function (error) {
          alert("请求失败", error);
        }
      );
    },
    submit() {
      console.log(111);
      this.$refs.ReginForm.validate((valid) => {
        console.log(222);
        if (valid) {
          console.log(333);
          if (this.okReg) {
            this.thisAjax();
            this.$router.replace("/login");
          }
          // console.log("开始写入后台数据！");
        } else{
          // console.log("submit err");//非空判断
          this.$message.error("请按要求填写注册信息！")
          return false;
        }
      });
    },
    reset() {
      this.$refs.ReginForm.resetFields();
    },
  },
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
.regBox {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 100;
}
.regform {
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
.reg-text {
  text-align: center;
  margin-bottom: 20px;
  color: #58bc54;
}

.regBox .el-form-item {
  min-width: 300px;
  width: 60%;
  margin: 22px auto;
  max-width: 500px;
}
</style>