import Vue from 'vue'
import createStore from '../store'
import { createRouter } from '../../src/themes/default/router'
import { sync } from 'vuex-router-sync'
import { registerTheme } from './themes'
import {themeEntry} from '../../src/themes/default/index'
import { registerClientModules } from '../../src/modules/client'
import { injectReferences } from '../lib/modules'
const createApp = () => {
  const store = createStore
  const router = createRouter()
  sync(store, router)
  // TODO find a way to pass local.json to config store
  store.state.config = {test: '1234'}
  const app = new Vue({
    router,
    store,
    render: h => h(themeEntry)
  })

  injectReferences(app, store, router, '')
  registerClientModules()
  registerTheme('default', app, router, store)

  return { app, router, store }
}
export default createApp
