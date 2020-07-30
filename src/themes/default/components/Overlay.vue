<template>
  <div class="overlay fixed w-100" @click="close" v-if="overlayActive" />
</template>

<script>
import { mapState } from 'vuex';

export default {
  name: 'Overlay',
  methods: {
    close () {
      this.$store.commit('ui/setOverlay', false);
      this.$store.commit('ui/setMyAccount', false);
      this.$store.commit('ui/setSidebar', false);
    }
  },
  computed: mapState({
    overlayActive: (state) => state.ui.overlay
  })
};
</script>

<style lang="scss" scoped>
.overlay {
  height: 100vh;
  top: 0;
  left: 0;
  background-color: rgba($color: #000000, $alpha: 0.6);
  z-index: 2;
}
</style>
