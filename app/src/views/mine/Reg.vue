<template>
  <div class="reg">
    <myWrapper @goto="goto" :buttonName="buttonName" :checked="checked">

    </myWrapper>
    <p @click="goto" class="gotoLogin">去登录</p>
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
  data(){return{
    checked:true,
    buttonName:"注册"
  }},
  methods:{
    goto(){
       this.showReg=false;
       this.showLogin=true;
       this.$emit("gotoLogin",this.showLogin,this.showReg)
    },
  },
  components:{
    myWrapper
  }
}
</script>