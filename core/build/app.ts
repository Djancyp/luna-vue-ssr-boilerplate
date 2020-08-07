import Vue from 'vue'
import createStore from '../store'
import { createRouter } from 'theme/router'
import { sync } from 'vuex-router-sync'
import { registerTheme } from './themes'
import {themeEntry} from 'theme/index'
import { registerClientModules } from '../../src/modules/client'
import { injectReferences } from '../lib/modules'
import VueMeta from 'vue-meta'
import {once} from '../helpers'
const LocalConfig = require('../config.json')

const createApp = (config: string) => {
  const store = createStore
  const router = createRouter()
  // sync(store, router)
  // TODO find a way to pass local.json to config store
  store.state.config = config
  once('__VUE_EXTEND__', () => {
    Vue.use(VueMeta)
  })

  const app = new Vue({
    router,
    store,
    render: h => h(themeEntry)
  })
  injectReferences(app, store, router, '')
  registerClientModules()
  return { app, router, store }
}
export default createApp
