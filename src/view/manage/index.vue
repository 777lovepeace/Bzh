<template>
  <div class="manage handle">
    <button>addCat</button>
    <div class="add-cat-area">
      <input type="text" placeholder="Please add new cat."/>
      <button>Add</button>
      <footer-nav></footer-nav>
    </div>
  </div>
</template>

<script>
  import CatLeftBar from '../../components/catLeftBar.vue';

  export default {
    name: "index",
    components: {
      CatLeftBar
    }
  }
</script>

<style scoped>
  @import "./../../assets/css/allUse.css";
  @import "./../../assets/css/manage.css";
</style>