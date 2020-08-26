<template>
  <el-main>
    <el-form :model="ruleForm" ref="ruleForm" :rules="rule" class="regform" label-width="0">
      <h3 class="login-text">请登录</h3>

      <el-form-item prop="tel">
        <el-input type="text" v-model.number="ruleForm.tel" placeholder="手机号码"></el-input>
      </el-form-item>
      <el-form-item prop="password">
        <el-input type="password" v-model="ruleForm.password" placeholder="密码"></el-input>
      </el-form-item>
      <!-- <div>
        <input class="auth_input" type="text" v-model="verification" placeholder="输入验证码" />
        <span v-show="sendAuthCode" class="auth_text auth_text_blue" @click="getAuthCode">获取验证码</span>
        <span v-show="!sendAuthCode" class="auth_text">
          <span class="auth_text_blue">{{auth_time}}</span> 秒之后重新发送验证码
        </span>
      </div> -->
      <el-form-item>
        <el-button
          type="success"
          class="submitBtn"
          round
          @click.native.prevent="submit"
          :loading="logining"
        >登录</el-button>
        <hr />
        <p>
          没有账号，马上去
          <span class="to" @click="toreg">注册</span>
        </p>
      </el-form-item>
    </el-form>
  </el-main>
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
    // console.log(validatePass);
    let checkAge = (rule, value, callback) => {
      if (value === "") {
        return callback(new Error("账号不能为空"));
      } else if (!Number.isInteger(value)) {
        return callback(new Error("必须是数字"));
      } else if (value.toString().length !== 11) {
        return callback(new Error("正确填写手机号"));
      } else {
        callback();
      }
    };
    return {
      ruleForm: {
        password: "",
        tel: "",
      },
      logining: false,
      sendAuthCode: true /*布尔值，通过v-show控制显示‘获取按钮’还是‘倒计时’ */,
      auth_time: 0 /*倒计时 计数器*/,
      verification: "", //绑定输入验证码框框
      rule: {
        password: [
          {
            required: true,
            validator: validatePass,
            message: '密码不能为空！',
            trigger: "blur",
          },
        ],
        tel: [
          {
            required: true,
            validator: checkAge,
            message: '账号不能为空！',
            trigger: "blur",
          },
        ],
        // 验证码
      },
    };
  },
  methods: {
    //   验证 码
    getAuthCode: function () {
      const verification = this.ruleForm.tel;
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
    toreg() {
      //没有账号，跳转到注册页面
      // console.log(this.$router)
      this.$router.push('/reg');
    },
    // 封装注册发送请求方法
    thisAjax() {
      const passwordData = this.ruleForm.password;
      const phoneData = this.ruleForm.tel;
      const mCodeData = this.verification;
      const self= this;
      //登录接口需要修改，此处为注册的接口
      const url = "http://42.194.179.50/api/reg";
      fetch(url,{
        method:'post',
        headers:{
          "Content-Type": "application/x-www-form-urlencoded"
        },
        body:{
          passwordData,
          phoneData,
          mCodeData
        }
      }).then(
          function (response) {
            //登录后跳转的页面--首页
            console.log("跳转", response);
            // this.$router.push("/");
             self.$router.replace('/home');
          },
          function (error) {
            alert("请求失败", error);
          }
        );
    },
    submit() {
      this.$refs.ruleForm.validate((valid) => {
        if (valid) {
          this.logining = true;
          this.thisAjax();
          // console.log("开始写入后台数据！");
        } else if(valid === ""){
          // console.log("submit err");//非空判断
          this.logining = false;
        }
      });
    },
    reset() {
      this.$refs.ruleForm.resetFields();
    }
  }
};
</script>

<style>