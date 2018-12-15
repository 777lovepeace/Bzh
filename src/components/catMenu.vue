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
                :default-active="activeIndex"
                class="el-menu-demo"
                mode="horizontal"
                menu-trigger="click"
                text-color="#ffa54f"
                active-text-color="#ff4500">
          <el-menu-item index="1">首页</el-menu-item>
          <el-submenu index="2">
            <template slot="title">我们家</template>
            <el-menu-item index="2-1">包崽</el-menu-item>
            <el-menu-item index="2-2">小王</el-menu-item>
            <el-submenu index="2-3">
              <template slot="title">花菜</template>
              <el-menu-item index="2-3-1">小姑娘</el-menu-item>
              <el-menu-item index="2-3-2">大宝</el-menu-item>
            </el-submenu>
            <el-submenu index="2-4">
              <template slot="title">毛豆</template>
              <el-menu-item index="2-4-1">皮孩</el-menu-item>
              <el-menu-item index="2-4-2">皮孩</el-menu-item>
            </el-submenu>
          </el-submenu>
          <el-menu-item index="3" disabled>开发ing</el-menu-item>
          <el-menu-item index="4" disabled>开发ing</el-menu-item>
          <el-menu-item index="5"><a href="https://www.bilibili.com" target="_blank">去看看</a></el-menu-item>
        </el-menu>
      </el-col>
    </el-row>
  </div>
</template>

<script>
  export default {
    name: "cat-menu",
    data() {
      return {
        activeIndex: '1',
        activeIndex2: '1'
      };
    }
  }
</script>

<style scoped>
  @import "./../assets/css/allUse.css";
  .el-row {
    margin-bottom: 20px;
    line-height: 70px;
  }
  .el-row:last-child {
    margin-bottom: 0;
  }
  .el-col {
    border-radius: 4px;
  }
  .grid-content {
    border-radius: 4px;
    height: 70px;
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
  .el-menu-demo {
    margin-top: 10px;
  }
  .el-submenu__title>.el-submenu__title i {
    color: #ffa54f !important;
  }
</style>