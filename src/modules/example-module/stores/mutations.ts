import { MutationTree } from 'vuex';
import blogsTypes from '../types/blogsTypes';

const mutations: MutationTree<blogsTypes> = {
  setBlogs (state, payload) {
    state.blogs = payload;
  }

};

export default mutations;
