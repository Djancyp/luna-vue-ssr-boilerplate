<template>
  <div class="container">
    <h1>Test Page</h1>
    <no-ssr>
      <Tesst />
    </no-ssr>
  </div>
</template>

<script>
import fetch from 'isomorphic-fetch'
import { mapGetters, mapState } from 'vuex';
import NoSSR from 'vue-no-ssr'
// import Tesst from '../components/test.vue'
const Tesst = () => import(/* webpackChunkName: "sidebar-menu" */ '../components/test.vue');

export default {
  components: {
    Tesst,
    'no-ssr': NoSSR
  },
  data () {
    return {
      test: null
    }
  },
  mounted () {
    console.log('hello')
  }

}
</script>

<style lang="scss" scoped>
ul{
  margin: 0;
  padding: 0;
  li{
    list-style: none;
  }
}
.blog-box{
  margin-top: 20px;
  margin-bottom: 20px;
.blog{
  padding: 10px;
  margin-bottom: 20px;
  border: 1px solid #eee;
  .blog-title{
    text-transform: capitalize;
    padding-bottom: 10px;
  }
}
}

</style>
