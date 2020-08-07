<template>
  <div class="sidebar-menu fixed mw-100 bg-cl-secondary">
    <div class="row brdr-bottom-1 brdr-cl-bg-secondary">
      <div
        v-if="submenu.depth"
        class="col-xs bg-cl-primary"
      >
        <sub-btn type="back" class="bg-cl-transparent brdr-none" />
      </div>
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
        <ul class="p0 m0 relative sidebar-menu__list" :style="mainListStyles">
          <li
            @click="closeMenu"
            class="brdr-bottom-1 brdr-cl-bg-secondary bg-cl-primary"
            v-for="menu in Menus" :key="menu.id"
          >
            <sub-btn
              v-if="menu.children_count > 0"
              class="bg-cl-transparent brdr-none fs-medium"
              :id="menu.id"
              :name="menu.name"
            />
            <router-link
              v-else
              class="block px25 py20 cl-accent no-underline"
              :to="menu.url"
              exact
            >
              {{ menu.name }}
            </router-link>
            <sub-category
              :category-links="menu.children_data"
              :id="menu.id"
              :parent-slug="menu.url"
              :parent-path="menu.url"
            />
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import { disableBodyScroll, clearAllBodyScrollLocks } from 'body-scroll-lock'
import SubBtn from './SubBtn.vue'
import SubCategory from './SubCategory.vue'
export default {
  data () {
    return {
      Menus: [
        {
          id: 1,
          name: 'Home Page',
          url: '/',
          children_count: 0
        },
        {
          id: 2,
          name: 'About Us',
          url: '/static',
          children_count: 0
        },
        {
          id: 3,
          name: 'Example Pages',
          url: '/test',
          children_count: 3,
          children_data: [
            {
              id: 1,
              name: 'Blog Ssr Fetch',
              url: '/blogs_example'
            }, {
              id: 2,
              name: 'Submenu Example 2',
              url: '/static'
            }
          ]
        }
      ],
      componentLoaded: false
    }
  },
  computed: {
    mainListStyles () {
      return this.submenu.depth ? `transform: translateX(${this.submenu.depth * 100}%)` : false
    },
    ...mapState({
      submenu: state => state.ui.submenu
    }),
    getSubmenu () {
      return this.submenu
    },
    isCurrentMenuShowed () {
      return !this.getSubmenu || !this.getSubmenu.depth
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
    })
  },
  destroyed () {
    clearAllBodyScrollLocks()
  },
  components: {
    SubBtn,
    SubCategory
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
