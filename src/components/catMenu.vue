<template>
  <div>
    <el-row>
      <el-col :span="10">
        <div class="grid-content logo-content">
          <img class="cat-logo" src="./../assets/img/cat-logo.png" alt="">
        </div>
      </el-col>
      <el-col :span="5.5">
        <el-menu
                :default-active="$route.path"
                class="el-menu-demo"
                mode="horizontal"
                :unique-opened="true"
                :router="true"
                menu-trigger="hover"
                text-color="#ffa54f"
                active-text-color="#ff4500"
                @select="handleSelect">
          <el-menu-item index="/" :route="{path:'/'}">首页</el-menu-item>
          <el-menu-item index="2" disabled>开发ing</el-menu-item>
          <el-submenu index="/">
            <template slot="title">我们家</template>
            <el-menu-item index="/blog" :route="{path:'/blog'}">包崽</el-menu-item>
            <el-menu-item index="3-2">小王</el-menu-item>
            <el-submenu index="3-3">
              <template slot="title">花菜</template>
              <el-menu-item index="3-3-1">小姑娘</el-menu-item>
              <el-menu-item index="3-3-2">大宝</el-menu-item>
            </el-submenu>
            <el-submenu index="3-4">
              <template slot="title">毛豆</template>
              <el-menu-item index="3-4-1">皮孩</el-menu-item>
              <el-menu-item index="3-4-2">皮孩</el-menu-item>
            </el-submenu>
          </el-submenu>
          <el-menu-item index=""><a href="https://www.bilibili.com" target="_blank">去看看</a></el-menu-item>
        </el-menu>
      </el-col>
      <el-col :span="8.5">
        <el-dropdown trigger="click">
          <span class="el-dropdown-link">
            <img class="head-portrait" src="./../assets/img/cat-logo.jpg" alt="">
            <i class="el-icon-arrow-down el-icon--right"></i>
          </span>
          <el-dropdown-menu slot="dropdown">
            <el-dropdown-item><router-link :to="{name: 'Login', params: {user: 1}}">登录</router-link></el-dropdown-item>
            <el-dropdown-item><router-link :to="{name: 'Login', params: {user: 0}}">注册</router-link></el-dropdown-item>
          </el-dropdown-menu>
        </el-dropdown>
      </el-col>
    </el-row>
  </div>
</template>

<script>
  export default {
    name: "cat-menu",
    data() {
      return {
        activeIndex: '/'
      }
    },
    methods: {
      handleSelect (key, keyPath) {
      }
    }
  }
</script>

<style scoped>
  @import "./../assets/css/allUse.css";
  .el-row {
    margin-bottom: 20px;
    line-height: 60px;
  }
  .el-row:last-child {
    margin-bottom: 0;
  }
  .el-col {
    border-radius: 4px;
  }
  .grid-content {
    border-radius: 4px;
    height: 60px;
  }
  .logo-content {
    background-color: #fff;
  }
  .logo-content img {
    vertical-align: middle;
  }
  .cat-logo {
    width: 196px;
  }
  .el-dropdown {
    color: #909399;
    font-weight: bold;
    font-size: 18px;
  }
  .el-submenu__title>.el-submenu__title i,
  .router-link,
  .el-dropdown-menu__item>a {
    color: #ffa54f !important;
  }
  .head-portrait {
    width: 46px;
    height: 46px;
    border: 1px solid #e6e6e6;
    border-radius: 50%;
    vertical-align: middle;
  }
  .el-dropdown {
    width: 280px;
    text-align: right;
  }
</style>