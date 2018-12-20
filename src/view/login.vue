<template>
  <div class="login">
    <el-container>
      <el-main>
        <div class="login-content">
          <p class="login-title">猫崽有限公司</p>
          <div class="tab-box">
            <el-tabs
                    type="border-card"
                    v-model="activeName"
                    @tab-click="handleClick">
              <el-tab-pane label="登录" name="1">
                <el-input v-model="loginName" placeholder="请输入用户名" :maxlength="10">
                  <i slot="suffix" class="el-input__icon el-icon-edit"></i>
                </el-input>
                <el-input :type="this.show.pwdType" v-model="loginPwd" placeholder="请输入密码" :minlength="6" :maxlength="11">
                  <i @click="isShow()" slot="suffix" class="el-input__icon" :class="this.show.showIcon ? 'el-icon-more' : 'el-icon-view'"></i>
                </el-input>
                <el-button type="warning" plain icon="el-icon-success" :disabled="!loginName || !loginPwd">登录</el-button>
              </el-tab-pane>
              <el-tab-pane label="注册" name="2">
                <el-input v-model="addName" placeholder="请输入用户名" :maxlength="10">
                  <i slot="suffix" class="el-input__icon el-icon-edit"></i>
                </el-input>
                <el-input :type="this.show.pwdType" v-model="addPwd" placeholder="请输入密码" :minlength="6" :maxlength="11">
                  <i @click="isShow()" slot="suffix" class="el-input__icon" :class="this.show.showIcon ? 'el-icon-more' : 'el-icon-view'"></i>
                </el-input>
                <el-button type="warning" plain icon="el-icon-edit-outline" :disabled="!addName || !addPwd">注册</el-button>
              </el-tab-pane>
            </el-tabs>
          </div>
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
        loginName: '', // 用户名
        loginPwd: '', // 密码
        addName: '',
        addPwd: '',
        show: { // 密码是否可见
          pwdType: 'password',
          showIcon: true
        },
        activeName: '1'
      }
    },
    methods: {
      isShow () {
        this.show.pwdType = this.show.pwdType === 'password' ? 'text' : 'password'
        this.show.showIcon = this.show.showIcon === true ? false : true
      },
      handleClick (tab, event) {
        console.log(event)
      }
    },
    computed: {
      isLogin () {
        return !!this.loginName && !!this.loginPwd
        !!this.addName && !!this.addPwd
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
  .login-title {
    color: #ffa54f;
    font-size: 24px;
  }
  .tab-box {
    width: 80%;
    margin: 0 auto;
  }
  .el-tabs--border-card>.el-tabs__header {
    margin-bottom: 20px;
  }
</style>