import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import MyComponent from '@/components/MyComponent'
import Index from '@/components/Index'
import Show from '@/components/ShowComponent'
import User from '@/components/User'
import NotFound from "@/components/NotFoundComponent"
Vue.use(Router)

export default new Router({
  mode:'history',
  base:'/app',
  routes: [
    {
      path:'/user/:id',
      component:User,
      props: true
    },
    {
      path:"/my",
      component:MyComponent
    },
    {
      path:'/hello',
      component:HelloWorld
    },
    {
      path:'/show',
      name:'show',
      component:Show
    },
    {
      path: '/',
      component: Index
    },
    {
      path:'*',
      component:NotFound
    }
  ]
})
