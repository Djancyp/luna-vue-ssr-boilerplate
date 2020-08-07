import createApp from './app'

const config = require('config')
const isDev = process.env.NODE_ENV !== 'production'

function _ssrHydrateSubcomponents (components, store, router, resolve, reject, app, context) {
  Promise.all(components.map(SubComponent => {
    if (SubComponent.asyncData) {
      return SubComponent.asyncData({
        store,
        route: router.currentRoute,
        context
      })
    } else {
      return Promise.resolve(null)
    }
  })).then(() => {
    resolve(app)
  }).catch(err => {
    console.log(err)
  })
}

export default context => {
  return new Promise((resolve, reject) => {
    console.log('what the f server')
    const s = isDev && Date.now()
    const { app, router, store } = createApp(config)
    const { url } = context
    const { fullPath } = router.resolve(url).route

    if (fullPath !== url) {
      return reject({ url: fullPath })
    }
    router.push(url)
    router.onReady(() => {
      const matchedComponents = router.getMatchedComponents()
      // no matched routes
      if (!matchedComponents.length) {
        return reject({ code: 404 })
      }
      Promise.all(matchedComponents.map((Component: any) => {
        const components = Component.mixins ? Array.from(Component.mixins) : []
        console.log(components)
        _ssrHydrateSubcomponents(components, store, router, resolve, reject, app, context)
      }))

      Promise.all(matchedComponents.map(({ asyncData }) => asyncData && asyncData({
        store,
        route: router.currentRoute
      }))).then(() => {
        isDev && console.log(`data pre-fetch: ${Date.now() - s}ms`)
        const meta = (app as any).$meta()
        context.meta = meta
        context.state = store.state
        resolve(app)
      }).catch(err => {
        console.log('-----Out of box')
        console.log(err)
        return reject
      })
    })
  })
}
