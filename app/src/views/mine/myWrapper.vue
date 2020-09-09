<template>
  <div class="login">
    <div class="closeWrapper">
      <!-- <van-icon name="cross" @click="closeWrapper" /> -->
    </div>
    <img class="logo" src="../../assets/szlogo.png" alt />
    <van-field class="info" v-model="username" name="用户名" label="用户名" placeholder="用户名" />
    <van-field
      class="info"
      v-model="password"
      type="password"
      name="密码"
      label="密码"
      placeholder="密码"
    />
    <van-field class="info verify" v-model="verify" line-block placeholder="验证码" />
    <div class="svgVcodeBox">
      <span @click="getVcode()" id="svgVcode"></span>
    </div>

    <slot></slot>
    <div style="margin: 16px;">
      <van-button
        id="btn"
        :disabled="ableToSubmit()"
        @click="onSubmit"
        round
        block
        type="info"
        native-type="submit"
      >{{buttonName}}</van-button>
    </div>
  </div>
</template>
<script>
import Vue from "vue";
import { Button, Field, Checkbox, Notify } from "vant";
Vue.use(Button);
Vue.use(Field);
Vue.use(Checkbox);
Vue.use(Notify);
export default {
  props: {
    //   getVcode:{type:Function},
    buttonName: { type: String },
    checked: { type: Boolean },
    // showReg:{type:Boolean},
    // showLogin:{type:Boolean}
  },
  data() {
    return {
      username: "",
      password: "",
      verify: ""
    };
  },
  created() {
    this.getVcode();
  },
  methods: {
    async getVcode() {
      const result = await fetch(`http://42.194.179.50/api/vcode`, {
        credentials: "include"
      }).then(res => res.json());

      if (result.code === 1) {
        document.querySelector('#svgVcode').innerHTML = result.data;
      }
    },
    goto() {
      this.$router.push("/reg");
    },
    closeWrapper() {
      this.show = false;
    },
    ableToSubmit() {
      if (this.password && this.username && this.verify && this.checked) {
        return false;
      }
      return true;
    },

    async onSubmit(values) {
      if (this.buttonName === "登录") {
        let queryStr = "";
        queryStr += `password=${this.password}&username=${this.username}&vcode=${this.verify}&mdl=${this.checked}`;
        console.log(queryStr);
        fetch(`http://42.194.179.50/api/login?${queryStr}`, {
          credentials: "include"
        })
          .then(res => res.json())
          .then(data => {
            if (data.code == 1) {
              localStorage.setItem(
                "userInfo",
                JSON.stringify(data.data.authorization)
              );
              console.log(data);
              document.cookie="szbookUsername="+this.username;
              document.cookie="szbookcarInfo="+JSON.stringify(data.data.cartInfo)
              Notify({ type: "success", message: "登录成功" });
              this.$router.replace("/home");
              this.$store.commit("addUserInfo",data)
            } else if (data.code == 10) {
              Notify({ type: "danger", message: "验证码错误" });
              this.getVcode();
            } else {
              Notify({ type: "danger", message: "账号或者密码错误" });
            }
          });
      }
      if (this.buttonName === "注册") {
        //检测用户名是否存在

        fetch(`http://42.194.179.50/api/reg/check?username=${this.username}`)
          .then(res => res.json())
          .then(res => {
            if (res.code == 0) {
              Notify({ type: "danger", message: "该用户已存在" });
            } else {
              const url = "http://42.194.179.50/api/reg";
              fetch(url, {
                method: "post",
                credentials: "include",
                headers: {
                  "Content-Type": "application/json"
                },
                body: JSON.stringify({
                  username: this.username,
                  password: this.password,
                  vcode: this.verify,
                  cartInfo:[]
                })
              })
                .then(res => res.json())
                .then(res => {
                  console.log(res);
                  if (res.code == 10) {
                    Notify({ type: "danger", message: "验证码错误" });
                    this.getVcode();
                  } else {
                    Notify({ type: "success", message: "注册成功" });
                    //跳到登录组件
                    this.$emit("goto")
                  }
                });
            }
          });

      }
    }
  }
};
</script>
