<template>
  <div id="app">
    <img src="./assets/img/cats.jpg" alt="">
    <router-link class="link" to="/index">首页</router-link>
    <router-link class="link" to="/userCenter">猫崽中心</router-link>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style scoped>
  @import "assets/css/allUse.css";
  @import "assets/css/app.css";
</style>
