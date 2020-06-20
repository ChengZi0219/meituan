<template>
  <el-container class="home-container">
    <el-aside class="my-aside" :width="collapse?'64px':'200px'">
      <div class="logo" :class="{'close': collapse}"></div>
      <el-menu
        default-active="/welcome"
        background-color=" #34495e"
        text-color="#fff"
        router
        style="border-right: none"
        active-text-color="#ffd04b"
        :collapse="collapse"
        :collapse-transition="false">
        <el-submenu index="1">
          <template slot="title">
            <i class="el-icon-location"></i>
            <span slot="title">美团外卖</span>
          </template>
          <el-menu-item-group>
            <span slot="title"></span>
            <el-menu-item index="/welcome" >商家</el-menu-item>
            <el-menu-item index="/hello">商品</el-menu-item>
          </el-menu-item-group>
          <!-- <el-menu-item-group title="非异率"> -->
          <el-menu-item-group>
            <el-menu-item index="1-3">商家端非异率</el-menu-item>
            <el-menu-item index="1-4">配送端非异率</el-menu-item>
          </el-menu-item-group>
        </el-submenu>
        <el-menu-item index="/banmacang">
          <i class="el-icon-menu"></i>
          <span slot="title">斑马仓</span>
        </el-menu-item>
        <el-menu-item index="/user">
          <i class="el-icon-document"></i>
          <span slot="title">个人信息</span>
        </el-menu-item>
        <el-menu-item index="/settings">
          <i class="el-icon-setting"></i>
          <span slot="title">个人设置</span>
        </el-menu-item>
      </el-menu>
    </el-aside>
    <el-container>
      <el-header class="home-header">
        <span class="el-icon-s-fold" @click="toggleMenu()"></span>
        <span class="text">山西易采购互联网科技有限公司</span>
        <el-dropdown style="float:right">
          <span class="el-dropdown-link">
            <span class="el-icon-s-custom"></span>
            <b>cms管理者</b>
            <i class="el-icon-arrow-down el-icon--right"></i>
          </span>
          <el-dropdown-menu slot="dropdown">
            <el-dropdown-item icon="el-icon-setting" @click.native="handleSetting()">个人设置</el-dropdown-item>
            <el-dropdown-item icon="el-icon-unlock" @click.native="handleLogout()">退出登录</el-dropdown-item>
          </el-dropdown-menu>
        </el-dropdown>
      </el-header>
      <el-main>
          <!-- 显示二级路由对应的组件 -->
          <router-view></router-view>
      </el-main>
    </el-container>
  </el-container>
</template>
<script>
export default {
  name: '',
  data () {
    return {
      collapse: false
    }
  },
  methods: {
    toggleMenu () {
      this.collapse = !this.collapse
    },
    handleSetting () {
      this.$router.push('/settings')
    },
    handleLogout () {
      this.$router.push('/login')
    }
  }
}
</script>
<style lang='less' scoped>
.home-container {
  width: 100%;
  height: 100%;
  position: absolute;
  left: 0;
  top: 0;
  .my-aside {
    // width: 200px;
    background-color: #34495e;
    .logo {
      width: 100%;
      height: 60px;
      background: #0d2636 url(../../assets/logo2.png) no-repeat center / 150px auto;
    }
    .close {
      background-image: url(../../assets/logo-mini.png);
      background-size: 40px auto;
    }
  }
  .home-header {
    background-color: #34495e;
    color: #fff;
    border-bottom: 1px solid #ddd;
    line-height: 60px;
    .el-icon-s-fold {
      font-size: 26px;
      vertical-align: middle;
    }
    .text {
      vertical-align: middle;
      margin-left: 10px;
    }
    .el-dropdown-link {
      color: #fff;
    }
  }
}
</style>
