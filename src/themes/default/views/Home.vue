<template>
  <div id="home" class="footer-push">
    <div class="banner-container">
      <div class=" top-banner relative">
        <div class="banner-img">
          <div class="custom-shape-divider-bottom-1596289195">
            <svg
              data-name="Layer 1"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 1200 120"
              preserveAspectRatio="none"
            >
              <path d="M1200 120L0 16.48 0 0 1200 0 1200 120z" class="shape-fill" />
            </svg>
          </div>
          <img v-lazy="'/assets/images/freeimg_91433922freejpg850.jpg'" alt="banner">
        </div>
      </div>
    </div>
    <div class="container">
      <div class="row">
        <div class="col-md-6 relative">
          <div class="home-desc">
            <h2>What is Luna Vue Boilerplate??</h2>
            <p>
              Dolorem incidunt voluptates sunt ea eum voluptatem fuga placeat. Qui delectus eum non asperiores. Ab et quis sed voluptas enim voluptatem. Magnam adipisci qui voluptas natus veritatis autem saepe.
            </p>
          </div>
        </div>
        <div class="col-md-6 relative">
          <div class="custom-shape-divider-top-1596381309">
            <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
              <path d="M1200 120L0 16.48 0 0 1200 0 1200 120z" class="shape-fill" />
            </svg>
          </div>
          <img width="100%" v-lazy="'/assets/images/what_is.jpeg'" alt="why luna vue boilerplate">
        </div>
      </div>
    </div>
    <!-- <div class="container">
      <h1>Homepage Ssr fetch example</h1>
      <ul v-if="visibleMenu">
        <li v-for="(blog,index) in visibleMenu" :key="index" class="blog-box">
          <h1 class="blog-title">
            {{ blog.name }}
          </h1>
          <p class="blog-body">
            {{ blog.body }}
          </p>
        </li>
      </ul>
    </div> -->
  </div>
</template>

<script>
// import Composite from './composite';
import { mapGetters, mapState } from 'vuex';
export default {
  name: 'Home',
  // mixins: [Composite],
  computed: {
    ...mapGetters({
      visibleMenu: 'ExampleSsrModule/getBlogs'
    })
  },
  // serverside fetch
  // serverPrefetch () {
  //   return this.$store.dispatch('ExampleSsrModule/fetchBlogs');
  // },
  // if cant ssr client side
  async mounted () {
    // if (this.visibleMenu.length <= 0) {
    //   const test = await this.$store.dispatch('ExampleSsrModule/fetchBlogs');
    // }
  },
  metaInfo () {
    return {
      title: 'Home Page',
      meta: [{ vmid: 'description', name: 'description', content: 'homepage' }]
    };
  }
};
</script>
<style lang="scss" scoped>
ul {
  padding: 0;
  margin: 0;
  li {
    list-style: none;
  }
}
.blog-box {
  padding: 10px;
  border: 1px solid #2e4172;
  margin-bottom: 20px;
  .blog-title {
    font-size: 30px;
    text-transform: capitalize;
  }
}
.top-banner {
  position: relative;
  text-align: center;
  overflow: hidden;
  display: flex;
  flex-basis: 100%;
  width: 100%;
  max-height: 400px;
  .banner-img {
    padding-bottom: 400px;
    @media (max-width: 425px) {
      height: auto;
      padding-bottom: 0;
    }
    position: relative;
    width: 100%;
    max-width: 100%;
    height: 0;
    mix-blend-mode: multiply;
  }
  img {
    position: absolute;
    @media (max-width: 425px) {
      position: relative;
    }
    top: 0;
    left: 0;
    -webkit-transform: translate(0, -25%);
    -ms-transform: translate(0, -25%);
    transform: translate(0, -25%);
    z-index: -1;
    width: 100%;
  }
}
.custom-shape-divider-bottom-1596289195 {
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  overflow: hidden;
  line-height: 0;
  transform: rotate(180deg);
}

.custom-shape-divider-bottom-1596289195 svg {
  position: relative;
  display: block;
  width: calc(100% + 1.3px);
  height: 104px;
}

.custom-shape-divider-bottom-1596289195 .shape-fill {
  fill: #ffffff;
}
.custom-shape-divider-top-1596381309 {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    overflow: hidden;
    line-height: 0;
}

.custom-shape-divider-top-1596381309 svg {
    position: relative;
    display: block;
    width: calc(100% + 1.3px);
    height: 150px;
    transform: rotateY(180deg);
}

.custom-shape-divider-top-1596381309 .shape-fill {
    fill: #FFFFFF;
}
.home-desc{
  position: absolute;
    top: 50%;
    text-align: center;
    transform: translateY(-50%);
    @media (max-width:450px){
      position: relative;
    }
}
</style>
