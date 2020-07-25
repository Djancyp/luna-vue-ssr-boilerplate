import { GetterTree } from 'vuex'
import RootState from 'core/types/RootState'
import BlogsRootState from '../types/blogsTypes'

const getters: GetterTree<BlogsRootState, RootState> = {
  getBlogs: state => state.blogs
}

export default getters
