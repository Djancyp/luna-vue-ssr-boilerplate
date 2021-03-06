import Vue from 'vue'
import Router from 'vue-router'
import {once} from 'core/helpers'

once('__VUE_EXTEND_RR__', () => {
  Vue.use(Router)
})
// route-level code splitting
// const createListView = id => () => import('../views/CreateListView').then(m => m.default(id))
const Home = () => import(/* webpackChunkName: "luna-Home" */'../views/Home.vue');
const Static = () => import(/* webpackChunkName: "luna-Static" */ '../views/Static.vue');
const ErrorPage = () => import(/* webpackChunkName: "luna-ErrorPage" */ '../views/ErrorPage.vue');
const Blogs = () => import(/* webpackChunkName: "luna-test" */ '../views/BlogSsrExample.vue');
const Test = () => import(/* webpackChunkName: "luna-test" */ '../views/Test.vue');
export function createRouter () {
  return new Router({
    mode: 'history',
    fallback: false,
    scrollBehavior: () => ({ y: 0 }),
    routes: [
      { name: 'home', path: '/', component: Home },
      { name: 'static', path: '/static', component: Static },
      { name: 'page-not-found', path: '*', component: ErrorPage },
      { name: 'blogs', path: '/blogs_example', component: Blogs },
      { name: 'test', path: '/test', component: Test }

    ]
  })
}
