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
  },
  setMenu (state) {
    console.log('test')
  },
  setSubmenu (state, { id, depth }) {
    if (id) {
      state.submenu.path.push(id)
    } else if (state.submenu.path.length) {
      setTimeout(() => {
        state.submenu.path.pop()
      }, 300)
    }
    state.submenu.depth = state.submenu.depth > 0 && depth
  }
};

export default mutations;
