  <!-- 根节点 -->
<template>

  <el-container style="height:100%;margin:0">
    <el-header class="header">
      <el-row>
        <el-col :span="12" class="logo">
          <i class="el-icon-attract"></i> 深圳书城后台管理系统
        </el-col>
        <el-col :span="12" style="text-align:right">
          <el-button type="text" style="color:#fff"  @click="goto(logins.path,0)"  v-show="isShow">{{logins.text}} </el-button>
        </el-col>
      </el-row>

    </el-header>

    <el-container style="height:80%;overflow:hidden">

      <el-menu
        default-active="2"
        class="el-menu-vertical-demo"
        @select="changeMenu"
        background-color="#ffffff"
        text-color="rgba(64,158,255,0.5)"
        active-text-color="rgb(64,158,255)"
      >
        <template v-for="(item,idx) in menu">
          <el-submenu :index="item.path" v-if="item.submenu" :key="item.path">
            <template v-slot:title>
              <i :class="item.icon"></i>
              {{item.text}}
            </template>
            <el-menu-item
              :key="sub.path"
              :index="item.path+sub.path"
              v-for="(sub,id) in item.submenu"
              @click="goto(item.path+sub.path,id)"
            >{{sub.text}}</el-menu-item>
          </el-submenu>
          <el-menu-item :index="item.path" :key="item.path" v-else @click="goto(item.path,idx)">
            <i :class="item.icon"></i>
            <span slot="title">{{item.text}}</span>
          </el-menu-item>
        </template>
      </el-menu>
      <el-container>
        <el-main>
          <el-breadcrumb separator-class="el-icon-arrow-right" style="padding:6px">
            <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
            <el-breadcrumb-item>{{$route.fullPath}}</el-breadcrumb-item>
          </el-breadcrumb>
          <router-view />
        </el-main>
      </el-container>
    </el-container>
  </el-container>
</template>

<script>
export default {
  name: "App",
  components: {},
  data() {
    return {
      activeIndex: "./login",
      openMenu: [],
      logins:{
        text:"退出",//退出到登录页面
        path:"/login"
      },
      menu: [
        {
          text: "首页",
          path: "/home",
          icon: "el-icon-s-home",
        },
        {
          text: "用户管理",
          path: "/user",
          icon: "el-icon-user-solid",
          submenu: [
            {
              text: "添加用户",
              path: "/add",
            },
            {
              text: "用户列表",
              path: "/list",
            },
          ],
        },
        {
          text: "商品管理",
          path: "/goods",
          icon: "el-icon-s-management",
          submenu: [
            {
              text: "商品列表",
              path: "/list",
            },
            {
              text: "添加商品",
              path: "/add",
            },
          ],
        },
        {
          text: "订单管理",
          path: "/order",
          icon: "el-icon-s-order",
        },
      ],
      currentIndex: 0,
      isShow:true,
    };

  },
  methods: {
    changeMenu(path) {
      this.activeIndex = path;
    },
    goto(path, idx) {
      if (this.$route.fullPath.toString() === path.toString()) return;
      this.$router.replace(path);
      this.currentIndex = idx;
    },
  },
  computed: {
    route_str:function(){
      let rouArr = this.$route.path.split("/");
      let rouStr = ""
        console.log(rouArr);
        console.log(rouStr);
      for(var i=0;i<rouArr.length;i++){
        if(!rouArr[i])return;
        if(i==1){
          rouStr += i
        }
        if(i!=1){
          rouStr = rouStr + ">>" + i
        }
        console.log(rouStr);
      }
      return rouStr;
    }
  }
};
window.onselectstart = function () {
  return false;
};
</script>

<style lang="scss">
html,
body {
  height: 100%;
  margin: 0;
  padding: 0;
}
.el-header {
  background-color: #409eff;
  color: #333;
  line-height: 60px;
}

.el-header {
  color: #fff;
  font-size: 24px;
  i {
    font-size: 40px;
    vertical-align: middle;
  }
}

.el-submenu {
  background-color: #d3dce6;
  color: #333;
  line-height: 200px;
  min-width: 200px;
}

.el-main {
  background-color: #fff;
  color: #333;
  line-height: 160px;
  height: 100%;
  overflow: hidden;
  border-left: 1px solid #dcdfe6;
}

body > .el-container {
  margin-bottom: 40px;
}

.el-container:nth-child(5) .el-aside,
.el-container:nth-child(6) .el-aside {
  line-height: 260px;
}

.el-container:nth-child(7) .el-aside {
  line-height: 320px;
}

.is-active {
  i {
    color: inherit !important;
  }
}
.el-breadcrumb {
  position: fixed;
  z-index: 1;
  background: #eee;
  height: 40px;
  margin: 0;
  padding: 0 16px !important;
  width: 100%;
  left: 202px;
  top: 60px;
  line-height: 40px !important;
  box-shadow: 0 0 1px 0 rgba($color: #666, $alpha: 0.6);
}
</style>
