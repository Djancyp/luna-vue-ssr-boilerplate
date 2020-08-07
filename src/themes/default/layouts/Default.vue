<template>
  <div id="viewport" class="w-100 relative">
    <Overlay v-if="overlayActive" />
    <Header />

    <async-sidebar
      :async-component="SidebarMenu"
      :is-open="isOpen"
      direction="left"
      @close="$store.commit('ui/setSidebar',false)"
    />
    <slot class="main-container" />
    <Footer />
    <notification />
    <vue-progress-bar />
  </div>
</template>
<script>
import { mapState } from 'vuex';
import AsyncSidebar from '../components/theme/AsyncSidebar/AsyncSidebar.vue';
import Overlay from '../components/Overlay.vue';
import Header from '../components/core/Header/Header.vue'
import Notification from '../components/Notification.vue'
import Head from '../head'
import Footer from '../components/core/Footer/Footer.vue'

const SidebarMenu = () => import(/* webpackPreload: true */ /* webpackChunkName: "sidebar-menu" */ '../components/core/SidebarMenu/Menu.vue');
export default {
  data () {
    return {
      SidebarMenu
    };
  },
  computed: mapState({
    isOpen: (state) => state.ui.sidebar,
    openMyAccount: (state) => state.ui.openMyAccount,
    overlayActive: (state) => state.ui.overlay
  }),
  components: {
    AsyncSidebar,
    Overlay,
    Header,
    Footer,
    Notification
  },
  beforeMount () {
    // Progress bar on top of the page
    this.$router.beforeEach((to, from, next) => {
      this.$Progress.start()
      this.$Progress.increase(40)
      next()
    })
    this.$router.afterEach((to, from) => {
      this.$Progress.finish()
    })
  },
  metaInfo: Head
}
</script>
