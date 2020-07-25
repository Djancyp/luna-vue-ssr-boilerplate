import Vue from 'vue'
import { ActionTree } from 'vuex'
import BlogsRootState from '../types/blogsTypes'
import RootState from 'core/types/RootState'
import fetch from 'isomorphic-fetch'
const actions: ActionTree<BlogsRootState, RootState> = {
  async fetchBlogs ({commit}) {
    const blogs = fetch('https://jsonplaceholder.typicode.com/posts')
      .then((response) => response.json())
      .then((json) => {
        commit('setBlogs', json)
      })
      .catch(error => {
        console.log(error)
      })
    return blogs
  }
}
export default actions
