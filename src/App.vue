  <!-- 根节点 -->
<template>
  <el-container style="height:100%;margin:0">
    <el-header>
      <i class="el-icon-attract"></i> 深圳书城后台管理系统

    </el-header>
    <el-container>
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
            <el-breadcrumb-item>用户管理</el-breadcrumb-item>
            <el-breadcrumb-item>用户列表</el-breadcrumb-item>
            <el-breadcrumb-item>用户详情</el-breadcrumb-item>
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
      activeIndex: "/home",
      openMenu: [],
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
              text: "用户列表",
              path: "/list",
            },
            {
              text: "添加用户",
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
    };
  },
  methods: {
    changeMenu(path) {
      this.activeIndex = path;
    },
    goto(path, idx) {
      console.log(path);
      this.$router.replace(path);
      this.currentIndex = idx;
    },
  },
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
.el-header{
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
</style>
