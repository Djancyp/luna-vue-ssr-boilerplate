<template>
  <div>
    <Overlay v-if="overlayActive" />
    <div id="viewport" class="w-100 relative">
      <Header />

      <async-sidebar
        :async-component="SidebarMenu"
        :is-open="isOpen"
        direction="left"
        @close="$store.commit('ui/setSidebar')"
      />
      <slot />
      <notification />
    </div>
    <vue-progress-bar />
  </div>
</template>
<script>
import { mapState } from 'vuex';
import AsyncSidebar from '../components/theme/AsyncSidebar/AsyncSidebar.vue';
import Overlay from '../components/Overlay.vue';
import Header from '../components/core/Header/Header.vue'
import Notification from '../components/Notification.vue'
const SidebarMenu = () =>
  import(
    /* webpackPreload: true */ /* webpackChunkName: "sidebar-menu" */ '../components/core/SidebarMenu/Menu.vue'
  );
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
    Notification
  },

  mounted () {
    console.log(this.$store)
  }
}
</script>
