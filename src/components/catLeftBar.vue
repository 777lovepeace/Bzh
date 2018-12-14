<template>
  <div class="footer fixed">
    <ul>
      <li><router-link to="/">首页</router-link></li>
      <li><router-link to="/manage">猫崽管理</router-link></li>
    </ul>
  </div>
</template>

<script>
  export default {
    name: "catLeftBar"
  }
</script>

<style scoped>
  @import "./../assets/css/allUse.css";
  .footer {
    width: 100%;
    height: 50px;
    bottom: 0;
  }
  ul {
    display: flex;
    width: 100%;
    line-height: 50px;
  }
  ul li {
    flex: 1;
    background-color: #f1f1f1;
  }
  li a {
    display: inline-block;
    width: 100%;
    height: 100%;
    color: #2c3e50;
  }
</style>