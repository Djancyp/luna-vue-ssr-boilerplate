<template>
  <button
    type="button"
    class="menu brdr-none inline-flex"
    @click="menuToggle"
    :aria-label="'Open menu'"
    data-testid="menuButton"
  >
    <i class="material-icons">dehaze</i>
  </button>
</template>

<script>
import { mapState } from 'vuex'

export default {
  name: 'HamburgerIcon',
  computed: mapState({
    isOpen: state => state.ui.sidebar
  }),
  methods: {
    menuToggle () {
      this.$store.commit('ui/setMyAccount', false);
      this.$store.commit('ui/setSidebar', !this.isOpen);
    }
  }
}
</script>
<style lang="scss" scoped>
  .menu{
    background-color: transparent;
  }
</style>
