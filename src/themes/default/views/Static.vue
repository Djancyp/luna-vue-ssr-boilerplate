<template>
  <div class="container">
    <h1>This page is Static vue page</h1>
  </div>
</template>
<script>
export default {
  name: 'Static',
  metaInfo () {
    return {
      title: 'Static Page',
      meta: [{ vmid: 'description', name: 'description', content: 'Static Page' }]
    }
  },
  mounted () {
    console.log(this.$store.state)
  }
}
</script>
