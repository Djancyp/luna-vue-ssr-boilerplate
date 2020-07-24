import EventBus from '../event-bus'

// @deprecated from 2.0
export default {
  beforeCreated () {
    const eventName = this.$options.name.toLowerCase() + '-before-created'
    console.log(eventName, 'event')
    EventBus.$emit(eventName, this)
  },
  created () {
    const eventName = this.$options.name.toLowerCase() + '-after-created'
    console.log(eventName, 'event')
    EventBus.$emit(eventName, this)
  },
  beforeMount () {
    const eventName = this.$options.name.toLowerCase() + '-before-mount'
    console.log(eventName, 'event')
    EventBus.$emit(eventName, this)
  },
  mounted () {
    const eventName = this.$options.name.toLowerCase() + '-after-mounted'
    console.log(eventName, 'event')
    EventBus.$emit(eventName, this)
  }

}
