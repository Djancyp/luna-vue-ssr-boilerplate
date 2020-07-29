import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

// route-level code splitting
// const createListView = id => () => import('../views/CreateListView').then(m => m.default(id))
const Home = () => import(/* webpackChunkName: "luna-Home" */'../views/Home.vue');
const Static = () => import(/* webpackChunkName: "luna-Static" */ '../views/Static.vue');
const ErrorPage = () => import(/* webpackChunkName: "luna-ErrorPage" */ '../views/ErrorPage.vue');
export function createRouter () {
  return new Router({
    mode: 'history',
    fallback: false,
    scrollBehavior: () => ({ y: 0 }),
    routes: [
      { name: 'home', path: '/', component: Home },
      { name: 'static', path: '/static', component: Static },
      { name: 'page-not-found', path: '*', component: ErrorPage }
    ]
  })
}
