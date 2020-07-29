<template>
  <div id="home" class="container">
    <h1>Homepage Ssr fetch example</h1>
    <ul v-if="visibleMenu">
      <li v-for="(blog,index) in visibleMenu" :key="index" class="blog-box">
        <h1 class="blog-title">
          {{ blog.title }}
        </h1>
        <img width="100px" src="../assets/logo.png" alt="">
        <p class="blog-body">
          {{ blog.body }}
        </p>
      </li>
    </ul>
  </div>
</template>

<script>
// import Composite from './composite';
import { mapGetters, mapState } from 'vuex';

export default {
  name: 'Home',
  // mixins: [Composite],
  computed: {
    ...mapGetters({
      visibleMenu: 'ExampleSsrModule/getBlogs'
    })
  },
  // serverside fetch
  serverPrefetch () {
    return this.$store.dispatch('ExampleSsrModule/fetchBlogs');
  },
  // if cant ssr client side
  async mounted () {
    if (!this.visibleMenu) {
      const test = await this.$store.dispatch('ExampleSsrModule/fetchBlogs');
    }
    this.$store.dispatch('notification/spawnNotification', {
      type: 'success',
      message: 'Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.',
      action1: { label: 'OK', action: 'close' },
      action2: { label: 'Cancel', action: 'close' }
    })
  },
  metaInfo () {
    return {
      title: 'Home Page',
      meta: [{ vmid: 'description', name: 'description', content: 'homepage' }]
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
