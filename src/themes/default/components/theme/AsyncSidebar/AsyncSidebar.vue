<template>
  <transition
    :name="direction === 'right' ? 'slide-left' : direction === 'left' ? 'slide-right' : null "
  >
    <div
      class="mw-100 absolute cl-accent bg-cl-primary"
      :class="direction === 'left' ? 'left-sidebar' : direction === 'right' ? 'right-sidebar' : null "
      data-testid="sidebar"
      ref="sidebar"
      v-if="isOpen"
    >
      <component :is="component" @close="$emit('close')" @reload="getComponent" />
    </div>
  </transition>
</template>

<script>
import LoadingSpinner from './LoadingSpinner.vue';
import LoadingError from './LoadingError.vue';
import { disableBodyScroll, clearAllBodyScrollLocks } from 'body-scroll-lock';

export default {
  props: {
    asyncComponent: {
      type: Function,
      required: true
    },
    isOpen: {
      type: Boolean,
      default: false
    },
    /** "right" or "left"  */
    direction: {
      type: String,
      default: 'right'
    }
  },
  data () {
    return {
      component: null
    };
  },
  created () {
    this.getComponent();
  },
  watch: {
    isOpen (state) {
      if (state) {
        this.$nextTick(() => {
          disableBodyScroll(this.$refs.sidebar);
        });
      } else {
        clearAllBodyScrollLocks();
      }
    }
  },
  methods: {
    getComponent () {
      this.component = () => ({
        component: this.asyncComponent(),
        loading: LoadingSpinner,
        error: LoadingError,
        timeout: 3000
      });
    }
  }
};
</script>

<style lang="scss" scoped>
@import "../../../css/animations/transitions";

.slide-left-enter-active,
.slide-left-leave-active,
.slide-right-enter-active,
.slide-right-leave-active {
  transition: transform 0.25s;
}

.slide-left-enter,
.slide-left-leave-to {
  transform: translateX(100%);
}

.slide-right-enter,
.slide-right-leave-to {
  transform: translateX(-100%);
}

.right-sidebar {
  padding-top: 56px;
  top: 0;
  right: 0;
  z-index: 4;
  height: 100%;
  width: 800px;
  min-width: 320px;
  overflow-y: auto;
  overflow-x: hidden;
  -webkit-overflow-scrolling: touch;
}

.left-sidebar {
  padding-top: 56px;
  height: 100vh;
  width: 350px;
  top: 0;
  left: 0;
  overflow: hidden;
  overflow-y: auto;
  -webkit-overflow-scrolling: touch;
  z-index: 4;

  @media (max-width: 767px) {
    width: 100vh;
  }
}

.close {
  i {
    opacity: 0.6;
  }
  &:hover,
  &:focus {
    i {
      opacity: 1;
    }
  }
}
</style>
