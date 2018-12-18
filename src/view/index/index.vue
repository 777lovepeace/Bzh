<template>
  <div class="index">
    <el-container>
      <el-header><cat-menu></cat-menu></el-header>
      <el-main>
        <el-carousel :interval="5000" arrow="always" type="card" height="500px">
          <el-carousel-item v-for="item in imgList" :key="item.id">
            <el-row>
              <!--<el-col :span="24"><img class="banner-img" :src="item.idView"></el-col>-->
              <el-col :span="24"></el-col>
            </el-row>
          </el-carousel-item>
        </el-carousel>
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
    },
    data () {
      return {
        imgList: [
          {id: 0, idView: require('./../../assets/img/cat1.jpg')},
          {id: 1, idView: require('./../../assets/img/cat8.jpg')},
          {id: 2, idView: require('./../../assets/img/cat3.jpg')},
          {id: 3, idView: require('./../../assets/img/cat4.jpg')},
          {id: 4, idView: require('./../../assets/img/cat9.jpg')},
          {id: 5, idView: require('./../../assets/img/cat10.jpg')},
          {id: 6, idView: require('./../../assets/img/cat11.jpg')}
        ]
      }
    }
  }
</script>

<style scoped>
  @import "./../../assets/css/allUse.css";
  @import "./../../assets/css/index.css";
</style>