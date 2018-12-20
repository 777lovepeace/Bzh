<template>
  <div id="app">
    <div>
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'App'
  }
</script>

<style scoped>
  @import "assets/css/allUse.css";
  #app {
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    margin: 0 auto;
    padding: 0;
    background: url("./assets/img/snow-1.jpg") no-repeat;
    background-size: cover;
    text-align: center;
    color: #333;
    -webkit-background-size: cover;
    -moz-background-size: cover;
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
</style>
