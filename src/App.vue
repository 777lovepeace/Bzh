<template>
  <div id="app">
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
  #app {
    height: 100%;
    margin: 0 auto;
    text-align: center;
    color: #2c3e50;
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
</style>
