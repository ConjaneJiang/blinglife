import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import BlogList from "@/views/BlogList";
import BlogDetail from "@/views/BlogDetail";

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/about',
      name: 'about',
      component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
    },
    {
      path: '/blog',
      name: 'blog',
      component: () => import('./views/Blog.vue'),
      children:[
        {
          path: '',
          name: 'blogList',
          component: () => import('./views/BlogList.vue'),
          components:{
            blog:BlogList
          }
        },
        {
          path: 'blogDetail/:id',
          name: 'blogDetail',
          component: () => import(/* webpackChunkName: "about" */ './views/BlogDetail.vue'),
          components:{
            blog:BlogDetail
          }
        },
      ]
    }
  ]
})
