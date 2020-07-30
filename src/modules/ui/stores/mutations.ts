import { MutationTree } from 'vuex';
import uiTypes from '../types/uiTypes';

const mutations: MutationTree<uiTypes> = {
  setAuthElem (state, payload) {
    state.authElem = payload;
  },
  setMyAccount (state, payload) {
    state.openMyAccount = payload === true
    state.overlay = payload;
  },
  setSidebar (state, payload) {
    state.sidebar = payload === true
    state.overlay = payload === true
  },
  setOverlay (state, action) {
    state.overlay = action === true
  }
};

export default mutations;
