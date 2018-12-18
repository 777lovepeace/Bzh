<template>
  <div>
    <el-container>
      <el-header><cat-menu></cat-menu></el-header>
      <el-main>

      </el-main>
    </el-container>
  </div>
</template>

<script>
  import CatMenu from '../../components/catMenu.vue';

  export default {
    name: "index",
    components: {
      CatMenu
    }
  }
</script>

<style scoped>
  @import "./../../assets/css/allUse.css";
  @import "../../assets/css/blog.css";
</style>