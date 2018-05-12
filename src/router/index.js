//路由页面
import Vue from 'vue'
import Router from 'vue-router'
import List from '@/components/List'
import Detail from '@/components/Detail'
import Login from '@/components/Login'
import Iindex from '@/components/index'


Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'List',
      component: List
    },
    {
      path:'/Login',
      name:'Login',
      component: Login,
    },
    {
      path : '/league/:name',
      name : 'Detail',
      component : Detail
    },
  ]
})
