<template>
  <div class="login">
    <el-container>
      <el-main>
        <div class="login-content">
          <p>猫崽有限公司</p>
          <p class="login-title" v-if="$route.params.user === 1">登录</p>
          <p class="login-title" v-if="$route.params.user === 0">注册</p>
          <el-input :type="this.show.pwdType" v-model="number" placeholder="请输入手机号" :maxlength="11">
            <i slot="suffix" class="el-input__icon el-icon-mobile-phone"></i>
          </el-input>
          <el-input :type="this.show.pwdType" v-model="password" placeholder="请输入密码" :minlength="6" :maxlength="11">
            <i @click="isShow()" slot="suffix" class="el-input__icon" :class="this.show.showIcon ? 'el-icon-more' : 'el-icon-view'"></i>
          </el-input>
        </div>
      </el-main>
    </el-container>
  </div>
</template>

<script>
  export default {
    name: "login",
    data () {
      return {
        number: '',
        password: '',
        show: {
          pwdType: 'password',
          showIcon: true
        },
      }
    },
    methods: {
      isShow () {
        this.show.pwdType = this.show.pwdType === 'password' ? 'text' : 'password'
        this.show.showIcon = this.show.showIcon === true ? false : true
      }
    }
  }
</script>

<style scoped>
  @import "./../assets/css/allUse.css";
  .login {
    width: 100%;
    height: 100%;
  }
  .login-content {
    position: absolute;
    top: 50%;
    left: 50%;
    width: 500px;
    height: 500px;
    background-color: #fff;
    transform: translate(-50%, -50%);
  }
  .el-input {
    width: 350px;
    margin-bottom: 30px;
    font-size: 18px;
  }
  .el-input__icon {
    color: #ffa54f;
  }
</style>