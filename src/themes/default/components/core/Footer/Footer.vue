<template>
  <footer class="footer">
    <div class="container">
      <div class="row">
        <div class="col-md-3">
          <strong>Footer Menu</strong>
          <ul>
            <li v-for="(menu, index) in PlaceholderMenu" :key="index">
              <router-link :to="menu.url">
                {{ menu.name }}
              </router-link>
            </li>
          </ul>
        </div>
        <div class="col-md-3">
          <strong>Footer Menu</strong>
          <ul>
            <li v-for="(menu, index) in PlaceholderMenu" :key="index">
              <router-link :to="menu.url">
                {{ menu.name }}
              </router-link>
            </li>
          </ul>
        </div>
        <div class="col-md-3">
          <strong>Footer Menu</strong>
          <ul>
            <li v-for="(menu, index) in PlaceholderMenu" :key="index">
              <router-link :to="menu.url">
                {{ menu.name }}
              </router-link>
            </li>
          </ul>
        </div>
        <div class="col-md-3">
          <strong>Footer Menu</strong>
          <ul>
            <li v-for="(menu, index) in PlaceholderMenu" :key="index">
              <router-link :to="menu.url">
                {{ menu.name }}
              </router-link>
            </li>
          </ul>
        </div>
      </div>
    </div>
    <back-to-top bottom="0" right="0" visibleoffset="200">
      <button
        type="button"
        class="btn-top button no-outline brdr-none cl-white bg-cl-mine-shaft :bg-cl-th-secondary py10 px10"
      >
        <svg
          width="24"
          height="24"
          xmlns="http://www.w3.org/2000/svg"
          fill-rule="evenodd"
          clip-rule="evenodd"
        >
          <path
            d="M23.25 20l-11.245-14.374-11.219 14.374-.781-.619 12-15.381 12 15.391-.755.609z"
            fill="white"
          />
        </svg>
      </button>
    </back-to-top>
  </footer>
</template>

<script>
import BackToTop from '../../BackToTop.vue';

export default {
  data () {
    return {
      PlaceholderMenu: [
        {
          name: 'Home',
          url: '/'
        },
        {
          name: 'Static Page',
          url: '/static'
        },
        {
          name: 'Example',
          url: '#'
        },
        {
          name: 'Example',
          url: '#'
        }
      ]
    };
  },
  components: {
    BackToTop
  }
};
</script>

<style lang="scss" scoped>
@import "~theme/css/variables/colors";
@import "~theme/css/helpers/functions/color";
.btn-top {
  background-color: transparent;
  &::after,
  &::before{
    content: '';
    position: absolute;
    bottom: 0;
    right: 0;
    border-color: transparent;
    border-style: solid;
  }
  &::after {
    border-radius: 1em;
    border-width: 3.5em;
    border-right-color: color(header);
    border-bottom-color:color(header);
    z-index: -1;
  }
  &::before {
    border-width: 3.5em;
    border-right-color: color(header);
    border-bottom-color: color(header);
    z-index: -1;
  }
}
.footer {
  @media (min-width: 700px) {
    position: absolute;
    right: 0;
    bottom: 0;
    left: 0;
  }
  color: 333;
  margin-top: 100px;
  padding-bottom: 50px;
  border-top: 1px solid color(grey30);
  background: color(white-smoke);
  ul {
    padding: 0;
    margin: 0;
    li {
      list-style: none;
      padding-top: 10px;
      a {
        color: color(mine-shaft);
      }
    }
  }
  strong {
    margin-top: 30px;
    margin-bottom: 15px;
  }
}
</style>
