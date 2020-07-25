import Vue from 'vue'
import App from './App.vue'
import VueProgressBar from 'vue-progressbar'
const options = {
  thickness: '5px',
  transition: {
    speed: '0.2s',
    opacity: '0.6s',
    termination: 300
  }
}
Vue.use(VueProgressBar, options)

const themeEntry = App
function initTheme (app, router, store, config, ssrContext) {
  // store.registerModule('claims', claimsStore);
}

export {
  themeEntry,
  initTheme
}
