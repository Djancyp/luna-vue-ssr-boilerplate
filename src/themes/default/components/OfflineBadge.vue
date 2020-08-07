<template>
  <no-ssr>
    <div
      class="offline-badge fixed p10 bg-cl-th-error cl-white center-xs"
    >
      {{ 'You are offline. Some features might not be available.' }}
    </div>
  </no-ssr>
</template>

<script>
import NoSSR from 'vue-no-ssr'

export default {
  components: {
    'no-ssr': NoSSR
  },
  data () {
    return {
      Offline: false
    }
  }
}
</script>
<style lang="scss" scoped>
@import '~theme/css/base/global_vars';
$z-index: map-get($z-index, overlay) - 1;

.offline-badge {
  bottom: 0;
  left: 0;
  right: 0;
  z-index: $z-index;
}
</style>
