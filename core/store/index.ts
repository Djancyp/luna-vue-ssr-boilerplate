import Vue from 'vue'
import Vuex from 'vuex'
import actions from './actions'
import mutations from './mutations'
import getters from './getters'
import RootState from '../types/RootState'

Vue.use(Vuex)

const state: any = {
  version: '',
  __DEMO_MODE__: false,
  config: {}
}

let createStore = new Vuex.Store<RootState>({
  state,
  actions,
  getters,
  mutations
})

export default createStore
