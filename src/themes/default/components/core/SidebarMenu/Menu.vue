<template>
  <div class="sidebar-menu fixed mw-100 bg-cl-secondary">
    <div class="row brdr-bottom-1 brdr-cl-bg-secondary">
      <div class="col-xs bg-cl-primary">
        <button
          type="button"
          :aria-label="'Close'"
          class="w-100 inline-flex end-xs bg-cl-transparent brdr-none p0 close-btn"
          @click="closeMenu"
        >
          <i class="material-icons p15">close</i>
        </button>
      </div>
    </div>
    <div class="sidebar-menu__container row" ref="container">
      <div class="col-xs-12 h4 serif">
        <ul class="p0 m0 relative sidebar-menu__list">
          <li
            @click="closeMenu"
            class="brdr-bottom-1 brdr-cl-bg-secondary bg-cl-primary"
          >
            <router-link
              class="block px25 py20 cl-accent no-underline"
              :to="'/'"
              exact
            >
              {{ 'Home' }}
            </router-link>
          </li>
          <li
            @click="closeMenu"
            class="bg-cl-secondary"
          >
            <router-link
              class="block px25 py20 brdr-bottom-1 brdr-cl-secondary cl-accent no-underline"
              :to="'/static'"
              exact
            >
              {{ 'Static Page' }}
            </router-link>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import { disableBodyScroll, clearAllBodyScrollLocks } from 'body-scroll-lock'

export default {
  data () {
    return {
      componentLoaded: false
    }
  },
  methods: {
    closeMenu () {
      this.$store.commit('ui/setSidebar', false);
    }
  },
  mounted () {
    this.$nextTick(() => {
      this.componentLoaded = true;
      disableBodyScroll(this.$refs.container)
      console.log('hello menu')
    })
  },
  destroyed () {
    clearAllBodyScrollLocks()
    console.log('byebye menu')
  }
}
</script>

<style lang="scss" scoped>
@import "~theme/css/animations/transitions";
@import '~theme/css/variables/colors';
@import '~theme/css/helpers/functions/color';
$bg-secondary: color(secondary, $colors-background);
$color-gainsboro: color(gainsboro);
$color-matterhorn: color(matterhorn);
$color-mine-shaft: color(mine-shaft);

.sidebar-menu {
  height: 100vh;
  width: 350px;
  overflow: hidden;

  @media (max-width: 767px) {
    width: 100vh;
  }

  &__container {
    overflow-y: auto;
    -webkit-overflow-scrolling: touch;
    height: calc(100% - 55px);
  }

  &__list {
    transition: transform $duration-main $motion-main;
  }

  ul {
    list-style-type: none;
  }

  li {
    &:hover,
    &:focus {
      background-color: $color-gainsboro;
    }
    &.bg-cl-primary {
      &:hover,
      &:focus {
        background-color: $bg-secondary;
      }
    }
    a {
      color: $color-mine-shaft;
    }
  }

  .subcategory-item {
    display: flex;
    width: 100%;
  }

  button {
    color: $color-mine-shaft;a {
      color: $color-mine-shaft;
    }
  }

  .close-btn {
    i {
      color: $color-gainsboro;
    }
    &:hover,
    &:focus {
      i {
        color: $color-matterhorn;
      }
    }
  }

}
</style>
