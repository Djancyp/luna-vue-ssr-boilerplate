<template>
  <router-link :to="'/'" :title="'Home Page'" class="no-underline inline-flex">
    <img
      :width="width"
      :height="height"
      src="/assets/logo.png"
      :alt="'logo'"
    >
  </router-link>
</template>

<script>

export default {
  props: {
    width: {
      type: [String, Number],
      required: true
    },
    height: {
      type: [String, Number],
      required: true
    }
  }
}
</script>
