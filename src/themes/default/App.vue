<template>
  <div id="app">
    <component :is="layout">
      <router-view />
    </component>
  </div>
</template>
<script>
import { mapState } from 'vuex'
const DefaultLayout = () => import(/* webpackChunkName: "vsf-layout-default" */ './layouts/Default.vue')

export default {
  components: {
    DefaultLayout
  },
  computed: {
    layout () {
      return `${(this.$route.meta.layout || 'default')}-layout`
    }
  }
};
</script>
<style lang="scss" src="./css/main.scss"></style>
