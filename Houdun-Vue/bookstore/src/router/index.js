import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Hdcms from '@/components/Hdcms'

//导入模块
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/hdcms',
      name: 'Hdcms',
      component: Hdcms
    }
  ]
})
