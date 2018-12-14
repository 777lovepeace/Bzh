import Vue from 'vue'
import Router from 'vue-router'
import Hello from '../components/hello'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import Index from '../view/index/index'
import UserCenter from '../view/userCenter'
import UserInfo from '../view/UserInfo'
import Manage from '../view/manage/index'

Vue.use(Router)
Vue.use(ElementUI)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'index',
      component: Index
    },
    {
      path: '/manage',
      name: 'Manage',
      component: Manage
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
