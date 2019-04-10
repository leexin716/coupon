import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)

export const constantRouter = [
  {
    path: '/',
    component: () => import('@/views/search/index'),
    meta: {
      title: '搜索页'
    }
  },
]

let router = new Router({
  base: '/',
  //mode: 'history',
  scrollBehavior: () => ({
    y: 0
  }),
  routes: constantRouter
});

export default router
