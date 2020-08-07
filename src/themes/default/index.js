import Vue from 'vue'
import App from './App.vue'
import VueProgressBar from 'vue-progressbar'
import VueLazyload from 'vue-lazyload'
// import VueQrcodeReader from 'vue-qrcode-reader';
// Vue.use(VueQrcodeReader)
Vue.use(VueLazyload, {
  preLoad: 1.3,
  error: '/assets/images/placeholder.png',
  loading: '/assets/images/placeholder.png',
  attempt: 1
})
const options = {
  color: '#0D3032',
  failedColor: '#874b4b',
  thickness: '5px',
  transition: {
    speed: '0.3s',
    opacity: '0.6s',
    termination: 500
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
