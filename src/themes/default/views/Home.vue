<template>
  <div id="home" class="container">
    <h1>Homepage Ssr fetch example</h1>
    <ul v-if="visibleMenu">
      <li v-for="(blog,index) in visibleMenu" :key="index" class="blog-box">
        <h1 class="blog-title">
          {{ blog.title }}
        </h1>
        <p class="blog-body">
          {{ blog.body }}
        </p>
      </li>
    </ul>
  </div>
</template>

<script>
import Composite from './composite';
import { mapGetters, mapState } from 'vuex';

export default {
  name: 'Home',
  mixins: [Composite],
  computed: {
    ...mapGetters({
      visibleMenu: 'vesMenu/getBlogs'
    })
  },
  // serverside fetch
  serverPrefetch () {
    return this.$store.dispatch('vesMenu/getMenu', 'url');
  },
  // if cant ssr client side
  async mounted () {
    if (!this.visibleMenu) {
      const test = await this.$store.dispatch('vesMenu/getMenu', 'url');
    }
  }
};
</script>
<style lang="scss" scoped>
ul {
  padding: 0;
  margin: 0;
  li {
    list-style: none;
  }
}
.blog-box {
  padding: 10px;
  border: 1px solid #2E4172;
  margin-bottom: 20px;
  .blog-title {
    font-size: 30px;
    text-transform: capitalize;
  }
}
</style>
