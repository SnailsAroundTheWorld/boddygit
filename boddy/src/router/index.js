import Vue from 'vue'
import Router from 'vue-router'
import axios from 'axios'
import { resolve } from 'path';
import HelloWorld from '@/components/HelloWorld'
import Login from '@/components/Login/Login'
import Land from '@/components/Login/LandPage'
import reg from '@/components/Login/RegPage'

Vue.prototype.$axios=axios
Vue.use(Router)

export default new Router({
  routes: [
    {
      path:'/',
      name:'LoginPge',
      component:Login,
      children:[
        {
          path:'Land',
          name:'LandPage',
          component:Land
        },{
          path:'reg',
          name:'RegPage',
          component:reg
        }
      ]
    }
  ]
  // routes:[
  //   {
  //     path:'/',
  //     name:'LoginPage',
  //     component:resolve=>require(['../components/Login/Login.vue'],resolve ),
  //     children:[
  //       {
  //         // 登录
  //         path:'Land',
  //         component:resolve=>require(['../components/Login/LandPage.vue'],resolve)
  //       },
  //       {
  //         // 注册
  //         path:'Reg',
  //         component:resolve=>require(['../components/Login/RegPage.vue'],resolve)
  //       }
  //     ]
  //   }
  // ]
})
