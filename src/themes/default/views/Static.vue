<template>
  <div>
    <h1>Static</h1>
  </div>
</template>
<script>
export default {
  name: 'Static',
  mounted () {
    console.log(this.$store.state)
  }
}
</script>
