import Vue from 'vue'
import Router from 'vue-router'
import Hello from '../components/hello'
import Index from '../view/index/index'
import UserCenter from '../view/userCenter'
import UserInfo from '../view/UserInfo'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'index',
      component: Index
    },
    {
      path: '/userCenter',
      name: 'userCenter',
      component: UserCenter,
      children: [
        {
          path: '/userInfo',
          name: 'userInfo',
          component: UserInfo
        }
      ]
    }
  ]
})
