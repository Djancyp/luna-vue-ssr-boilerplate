<template>
  <div>
    <ul
      v-if="categoryLinks"
      class="sidebar-submenu absolute w-100 p0 bg-cl-primary"
      :style="styles"
    >
      <li
        v-if="parentSlug"
        class="brdr-bottom-1 brdr-cl-bg-secondary bg-cl-primary flex"
      >
        <router-link
          class="px25 py20 cl-accent no-underline col-xs"
          :to="parentSlug"
          data-testid="categoryLink"
        >
          {{ 'View all' }}
        </router-link>
      </li>
      <li
        class="brdr-bottom-1 brdr-cl-bg-secondary bg-cl-primary flex"
        :key="link.id"
        v-for="link in categoryLinks"
      >
        <div
          v-if="isCurrentMenuShowed"
          class="subcategory-item"
        >
          <sub-btn
            v-if="link.children_count > 0"
            class="bg-cl-transparent brdr-none fs-medium"
            :id="link.id"
            :name="link.name"
          />
          <router-link
            v-else
            class="px25 py20 cl-accent no-underline col-xs"
            :to="link.url"
          >
            {{ link.name }}
          </router-link>
        </div>
        <sub-category
          v-if="link.children_count > 0"
          :category-links="link.children_data"
          :id="link.id"
          :parent-slug="link.id"
          :parent-path="link.url"
        />
      </li>
    </ul>
  </div>
</template>
<script>
import { mapState } from 'vuex'
import SubBtn from './SubBtn.vue'

export default {
  name: 'SubCategory',
  components: {
    SubBtn
  },
  props: {
    id: {
      type: [String, Number],
      required: true
    },
    categoryLinks: {
      type: null,
      required: false,
      default: false
    },
    parentSlug: {
      type: String,
      required: false,
      default: ''
    },
    parentPath: {
      type: String,
      required: false,
      default: ''
    },
    myAccountLinks: {
      type: null,
      required: false,
      default: false
    }
  },
  computed: {
    ...mapState({
      submenu: state => state.ui.submenu,
      path: state => state.ui.submenu.path
    }),
    getSubmenu () {
      return this.submenu
    },
    styles () {
      const pos = this.submenu.path.indexOf(this.id)
      return pos !== -1 ? {
        zIndex: pos + 1
      } : false
    },
    isCurrentMenuShowed () {
      return this.getSubmenu && this.getSubmenu.depth && this.getSubmenu.path[this.getSubmenu.depth - 1] === this.id
    }
  },
  methods: {
    async logout () {
      await this.$store.dispatch('user/logout', {})
      this.$router.push(this.localizedRoute('/'))
      this.$store.commit('ui/setSubmenu', { depth: false })
    }
  }
}
</script>

<style scoped>
  .sidebar-submenu {
    left: 0;
    top: 0;
    min-height: 100%;
    transform: translateX(-100%);
  }

  .subcategory-item {
    display: flex;
    width: 100%;
  }
</style>
