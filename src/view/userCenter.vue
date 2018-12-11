<template>
  <div>
    <h3>这是猫崽中心</h3>
    <router-link to="/userInfo">猫崽信息</router-link>
    <router-view></router-view>
  </div>
</template>

<script>
  export default {
    name: "user-center"
  }
</script>

<style scoped>
  @import "./../assets/css/allUse.css";
</style>