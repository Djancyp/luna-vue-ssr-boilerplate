<template>
  <div>
    <h1>NO SSR</h1>
    <QrcodeStream @decode="onDecode" />
    <QrcodeCapture />
  </div>
</template>
<script>
import { QrcodeStream, QrcodeDropZone, QrcodeCapture } from 'vue-qrcode-reader'
export default {
  components: {
    QrcodeStream,
    QrcodeCapture
  },
  methods: {
    onDecode (decodedString) {
    // ...
      alert(decodedString)
      console.log(decodedString)
    }
  }
}
</script>
