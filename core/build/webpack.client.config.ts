import webpack from 'webpack'
import merge from 'webpack-merge'
import base from './webpack.base.config'
import SWPrecachePlugin from 'sw-precache-webpack-plugin'
import VueSSRClientPlugin from 'vue-server-renderer/client-plugin'

const config = merge(base, {
  entry: {
    app: ['@babel/polyfill/noConflict', './core/build/entry-client.ts']
  },
  resolve: {
    alias: {
      'create-api': './create-api-client.js'
    }
  },
  plugins: [
    // strip dev-only code in Vue source
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV || 'development'),
      'process.env.VUE_ENV': '"client"'
    }),
    new VueSSRClientPlugin()
  ]
})

if (process.env.NODE_ENV === 'production') {
  config.plugins.push(
    // auto generate service worker
    new SWPrecachePlugin({
      cacheId: 'vue-hn',
      filename: 'service-worker.js',
      minify: true,
      dontCacheBustUrlsMatching: /./,
      staticFileGlobsIgnorePatterns: [/\.map$/, /\.json$/],
      staticFileGlobs: [
        'dist/**.*.js',
        'dist/**.*.json',
        'dist/**.*.css',
        'assets/**.*',
        'assets/ig/**.*',
        '/'
      ],
      runtimeCaching: [
        {
          // eslint-disable-next-line no-useless-escape
          urlPattern: '^https://fonts\.googleapis\.com/', /** cache the html stub  */
          handler: 'cacheFirst'
        },
        {
          // eslint-disable-next-line no-useless-escape
          urlPattern: '^https://fonts\.gstatic\.com/', /** cache the html stub  */
          handler: 'cacheFirst'
        },
        {
          urlPattern: '/',
          handler: 'networkFirst'
        },
        {
          urlPattern: '/assets/*',
          handler: 'fastest'
        },
        {
          urlPattern: '/assets/icons/*',
          handler: 'fastest'
        }, {
          urlPattern: '/dist/(.*)',
          handler: 'fastest'
        }
      ]
    })
  )
}

export default config
