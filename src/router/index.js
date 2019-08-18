import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import index from '@/components/index'
import company_item from '@/components/company_item'
import  companyAllInfo from '@/components/companyAllInfo'
import login from '@/components/login'
import register from '@/components/register'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/login',
      name: 'login',
      component: login
    },
    {
      path: '/register',
      name: 'register',
      component: register
    },
    {
      path: '/index',
      name: 'index',
      component: index,
      children: [
      ]
    },
    {
      path: '/companyAllInfo',
      name: 'companyAllInfo',
      component: companyAllInfo
    }
  ]
})
