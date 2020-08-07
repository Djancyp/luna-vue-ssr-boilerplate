<template>
  <div class="container">
    <h1>This is simple example for ssr fetch</h1>
    <ul class="row blog-box">
      <li class="col-md-12 blog" v-for="(blog, index) in blogs" :key="index">
        <h4 class="blog-title">
          {{ blog.title }}
        </h4>
        <p class="blog-body">
          {{ blog.body }}
        </p>
      </li>
    </ul>
  </div>
</template>

<script>
import fetch from 'isomorphic-fetch';
import { mapGetters, mapState } from 'vuex';

export default {
  data () {
    return {
      blogs: this.$store.state.ExampleSsrModule.blogs,
      News: null
    };
  },
  async asyncData ({ store }) {
    await Promise.all([store.dispatch('ExampleSsrModule/fetchBlogs')]);
  }
};
</script>

<style lang="scss" scoped>
ul {
  margin: 0;
  padding: 0;
  li {
    list-style: none;
  }
}
.blog-box {
  margin-top: 20px;
  margin-bottom: 20px;
  .blog {
    padding: 10px;
    margin-bottom: 20px;
    border: 1px solid #eee;
    .blog-title {
      text-transform: capitalize;
      padding-bottom: 10px;
    }
  }
}
</style>
