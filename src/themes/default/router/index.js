import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

// route-level code splitting
// const createListView = id => () => import('../views/CreateListView').then(m => m.default(id))
const Home = () => import('../views/Home.vue')
const Static = () => import('../views/Static.vue')
export function createRouter () {
  return new Router({
    mode: 'history',
    fallback: false,
    scrollBehavior: () => ({ y: 0 }),
    routes: [
      { path: '/', component: Home },
      { path: '/static', component: Static }

    ]
  })
}
