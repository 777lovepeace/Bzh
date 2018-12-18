import Vue from 'vue'
import Router from 'vue-router'
import Hello from '../components/hello'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import Index from '../view/index/index'
import Login from '../view/login'
import Blog from '../view/blog/index'

Vue.use(Router)
Vue.use(ElementUI)

export default new Router({
  base: '/',
  routes: [
    {
      path: '/',
      name: 'index',
      component: Index
    },
    {
      path: '/login',
      name: 'Login',
      component: Login
    },
    {
      path: '/blog',
      name: 'Blog',
      component: Blog
    }
  ]
})
