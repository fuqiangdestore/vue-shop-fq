<template>
  <el-container class="container">
    <el-header class="header">
      <el-row>
        <el-col :span="4">
          <div class="logo">
            <img src="../../assets/logo.png" alt />
          </div>
        </el-col>
        <el-col class="middle" :span="16">
          <h3>电商后台管理系统</h3>
        </el-col>
        <el-col :span="4">
          <a class="loginout" href>退出</a>
        </el-col>
      </el-row>
    </el-header>
    <el-container>
      <!-- 侧边导航 -->
      <el-aside class="aside" width="200px">
        <el-radio-group v-model="isCollapse" style="margin-bottom: 20px;">
          <el-radio-button :label="false">展开</el-radio-button>
          <el-radio-button :label="true">收起</el-radio-button>
        </el-radio-group>
        <el-menu
          default-active="1-4-1"
          class="el-menu-vertical-demo"
          @open="handleOpen"
          @close="handleClose"
          :collapse="isCollapse"
          :router="true"
        >
          <el-submenu>
            <template slot="title">
              <i class="el-icon-location"></i>
              <span slot="title">用户管理</span>
            </template>
            <el-menu-item-group>
              <el-menu-item index="users">用户列表</el-menu-item>
            </el-menu-item-group>
          </el-submenu>
          <el-submenu index="2">
            <template slot="title">
              <i class="el-icon-menu"></i>
              <span slot="title">权限管理</span>
            </template>
            <el-menu-item-group>
              <el-menu-item index="1-1">角色列表</el-menu-item>
              <el-menu-item index="1-2">权限列表</el-menu-item>
            </el-menu-item-group>
          </el-submenu>
          <el-submenu index="3">
            <template slot="title">
              <i class="el-icon-document"></i>
              <span slot="title">商品管理</span>
            </template>
            <el-menu-item-group>
              <el-menu-item index="1-1">商品列表</el-menu-item>
              <el-menu-item index="1-2">分类参数</el-menu-item>
              <el-menu-item index="1-2">商品分类</el-menu-item>
            </el-menu-item-group>
          </el-submenu>
          <el-submenu index="4">
            <template slot="title">
              <i class="el-icon-setting"></i>
              <span slot="title">订单管理</span>
            </template>
            <el-menu-item-group>
              <el-menu-item index="1-1">订单列表</el-menu-item>
            </el-menu-item-group>
          </el-submenu>
        </el-menu>
      </el-aside>
      <el-main class="main">
        <router-view></router-view>
      </el-main>
    </el-container>
  </el-container>
</template>

<script>
export default {
  data() {
    return {
      isCollapse: false
    };
  },
  methods: {
    toUsers() {
      this.$router.push({name : 'users'})

    },
    handleOpen(key, keyPath) {
      console.log(key, keyPath);
    },
    handleClose(key, keyPath) {
      console.log(key, keyPath);
    }
  }
};
</script>

<style lang="less" scoped>
.container {
  height: 100%;
  .header {
    background-color: #b3c0d1;
    .logo {
      height: 64px;
      img {
        width: 100%;
        height: 100%;
      }
    }
    .middle {
      text-align: center;
    }
    .loginout {
      line-height: 60px;
      text-decoration: none;
    }
  }
  .aside {
    background-color: #d3dce6;
  }
  .main {
    background-color: #e9eef3;
  }
}
</style>