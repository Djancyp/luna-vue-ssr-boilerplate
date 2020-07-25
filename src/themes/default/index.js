import Vue from 'vue'
import App from './App.vue'
import VueProgressBar from 'vue-progressbar'
Vue.use(VueProgressBar)

const themeEntry = App
function initTheme (app, router, store, config, ssrContext) {
  // store.registerModule('claims', claimsStore);
}

export {
  themeEntry,
  initTheme
}
