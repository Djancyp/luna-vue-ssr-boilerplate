<template>
  <div id="home">
    <ul v-if="visibleMenu">
      <li v-for="(blog,index) in visibleMenu" :key="index">
        <i class="icon material-icons">account_circle</i>
        <h1>{{ blog.title }}</h1>
        <p>{{ blog.body }}</p>
      </li>
    </ul>
  </div>
</template>

<script>
import Composite from './composite'
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
    return this.$store.dispatch('vesMenu/getMenu', 'url')
  },
  // client side
  async mounted () {
    if (!this.visibleMenu) {
      const test = await this.$store.dispatch('vesMenu/getMenu', 'url')
    }
  }
}
</script>
<style lang="css" scoped>
  a{
    color: red;
  }
</style>
