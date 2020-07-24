import { Module } from 'vuex';
import uiTypes from '../types/uiTypes';
import RootState from 'core/types/RootState'
// import actions from "./actions";
import mutations from './mutations';
// import getters from "./getters";
export const ui: Module<uiTypes, RootState> = {
  namespaced: true,
  state: {
    sidebar: false,
    overlay: false,
    loader: false,
    authElem: 'login',
    openMyAccount: false,
    submenu: {
      depth: false,
      path: []
    }
  },
  mutations
  //   actions,
  //   getters,
};
