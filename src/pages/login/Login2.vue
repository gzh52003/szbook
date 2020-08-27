<template>
  <div class="login-box"> 
    <el-form
      :model="ruleForm"
      status-icon
      :rules="rules"
      ref="ruleForm"
      label-width="100px"
      class="demo-ruleForm"
    >
      <span class="login-title">欢迎登录</span>
      <el-form-item label="用户名：" required prop="user">
        <el-input v-model.number="ruleForm.user"></el-input>
      </el-form-item>

      <el-form-item label="密码：" required prop="pass">
        <el-input type="password" v-model="ruleForm.pass" autocomplete="off"></el-input>
      </el-form-item>
      <!-- <div>
        <input class="auth_input" type="text" v-model="verification" placeholder="输入验证码" />
        <span v-show="sendAuthCode" class="auth_text auth_text_blue" @click="getAuthCode">获取验证码</span>
        <span v-show="!sendAuthCode" class="auth_text">
          <span class="auth_text_blue">{{auth_time}}</span> 秒之后重新发送验证码
        </span>
      </div> -->
      <el-form-item>
        <el-button type="primary" @click="submitForm('ruleForm')">提交</el-button>
        <el-button type="primary" @click="toreg">注册</el-button>
      </el-form-item>

    </el-form>
  </div>
</template>
<script>
// 引入qs 使用fetch 代替
import qs from "qs";

export default {
  data() {
    var checkAge = (rule, value, callback) => {
      if (!value) {
        return callback(new Error("用户名不能为空"));
      }
      // 当符合要求的条件的时候，就触发回调函数。这个回调的函数是显示成功的标识
      setTimeout(() => {
        callback();
      }, 500);
    };

    var validatePass = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("请输入密码"));
      } else {
        if (this.ruleForm.checkPass !== "") {
          this.$refs.ruleForm.validateField("checkPass");
        }
        callback();
      }
    };
    return {
      // 存放用户的数据 ruleForm 
      ruleForm: {
        pass: "",
        user: "",
      },
      logining: false,
      sendAuthCode: true /*布尔值，通过v-show控制显示‘获取按钮’还是‘倒计时’ */,
      auth_time: 0 /*倒计时 计数器*/,
      verification: "", //绑定输入验证码框框
      rules: {
        pass: [
          { 
            validator: validatePass, 
            trigger: "blur" 
          }
        ],
        user: [
          { 
            validator: checkAge, 
            trigger: "blur" 
          }
        ],
      },
    };
  },

  methods: {
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
      
      this.auth_time = 10;//设置倒计时秒
      var auth_timetimer = setInterval(() => {
        this.auth_time--;
        if (this.auth_time <= 0) {
          this.sendAuthCode = true;
          clearInterval(auth_timetimer);
        }
      }, 1000);
    },
    //未有账号，点击“注册”，跳转到该页面 
    toreg() {
      // console.log(this.$router)
      this.$router.push('/reg');
    },
    submitForm(formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          alert("登录成功");
          //获取用户的数据
          //console.log(this.ruleForm.user, this.ruleForm.pass )

          //用一个对象 username是存放的名字 用的是一个爹对象将他们存起来
          let params = {
            username: this.ruleForm.user,
            password: this.ruleForm.pass,
          };
          // console.log(params);
          // 发送请求 把参数发给后端（把用户名和密码发给后端 验证是否存在这个账号
          this.axios
            .post("http://42.194.179.50/api/login", qs.stringify(params))
            .then((response) => {
              // 接收后端返回的数据
              let { error_code, reason } = response.data;
              // 判断
              if (error_code === 0) {
                // 弹成功提示
                this.$message({
                  type: "success",
                  message: reason,
                });
                // 跳转到首页
                this.$router.push("/home");
              } else {
                // 弹失败提示
                this.$message.error(reason);
              }
            })
            .catch((err) => {
              console.log(err);
            });
        } else {
          // 否则就是false
          alert("前端验证失败，不能提交给后端！");
          return false;
        }
      });
    },
  },
};
</script>

<style>
.login-box {
    border: 1px solid #DCDFE6;
    width: 350px;
    margin: 0 auto;
    padding: 15px 35px;
    border-radius: 5px;
    -webkit-border-radius: 5px;
    -moz-border-radius: 5px;
    box-shadow: 0 0 25px palegreen;
}
.login-title {
    text-align: center;
    margin: 0 auto 40px auto;
    color: #66CD00;
    font-size: 30px;
    font-weight: bold;
}
.username,.password{
  height: auto;
  line-height: 0%;
}
</style>