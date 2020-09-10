<template>
  <div class="login">
    <myWrapper  :buttonName="buttonName" :checked="checked">
           <van-checkbox
            checked-color="#000"
            icon-size="18px"
            class="agree"
            v-model="checked"
          >登录即代表同意深圳书城协议服务和隐私政策
          </van-checkbox>
    </myWrapper>
          <p @click="goto" class="gotoReg">还没有账号，立即注册</p>
  </div>
</template>
<script>
import Vue from "vue";
import myWrapper from "./myWrapper";
export default {
  porps:{
    showLogin:{type:Boolean},
     showReg:{type:Boolean}
  },
  data(){
    return{
      checked: true,
      buttonName:"登录"
    }
  },
  methods:{
     goto(){
       this.showReg=true;
       this.showLogin=false;
       this.$emit("gotoReg",this.showLogin,this.showReg)
      // this.$router.push('/reg')
    },
  },
  components:{
    myWrapper
  }
}
</script>