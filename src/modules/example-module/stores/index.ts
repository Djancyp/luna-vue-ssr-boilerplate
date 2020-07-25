import { Module } from 'vuex';
import blogsTypes from '../types/blogsTypes';
import RootState from 'core/types/RootState'
import actions from './actions';
import mutations from './mutations';
import getters from './getters';
export const Blogs: Module<blogsTypes, RootState> = {
  namespaced: true,
  state: {
    blogs: []
  },
  mutations,
  actions,
  getters
};
