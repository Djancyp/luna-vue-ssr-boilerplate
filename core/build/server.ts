import { nextTick } from 'process';

const fs = require('fs')
const opn = require('opn');
const config = require('config')
const path = require('path')
const LRU = require('lru-cache')
const express = require('express')
const favicon = require('serve-favicon')
const compression = require('compression')
const microcache = require('route-cache')
const resolve = file => path.resolve(__dirname, file)
const { createBundleRenderer } = require('vue-server-renderer')
const minify = require('html-minifier').minify
const isProd = process.env.NODE_ENV === 'production'
const useMicroCache = process.env.MICRO_CACHE !== 'false'
const serverInfo =
  `express/${require('express/package.json').version} ` +
  `vue-server-renderer/${require('vue-server-renderer/package.json').version}`
const HTMLContent = require('../build/pages/Compilation.js')

const app = express()

function createRenderer (bundle, options) {
  return createBundleRenderer(bundle, Object.assign(options, {
    cache: LRU({
      max: 1000,
      maxAge: 1000 * 60 * 15
    }),
    basedir: resolve('./dist'),
    runInNewContext: false
  }))
}

let renderer
let readyPromise
const templatePath = resolve('../../src/themes/default/index.template.html')
if (isProd) {
  const template = fs.readFileSync(templatePath, 'utf-8')
  console.log('')
  const bundle = require('../dist/vue-ssr-server-bundle.json')
  const clientManifest = require('../dist/vue-ssr-client-manifest.json')
  renderer = createRenderer(bundle, {
    template,
    clientManifest
  })
} else {
  readyPromise = require('./setup-dev-server')(
    app,
    templatePath,
    (bundle, options) => {
      renderer = createRenderer(bundle, options)
    }
  )
}

const serve = (path, cache) => express.static(resolve(path), {
  maxAge: cache && isProd ? 1000 * 60 * 60 * 24 * 30 : 0
})

app.use(compression({ threshold: 0 }))
app.use(favicon('./public/icon-72x72.png'))
app.use('/dist', serve('../../dist', true))
app.use('/public', serve('../../public', true))
app.use('/assets', serve('../../src/themes/default/assets', true))
app.use('/manifest.json', serve('../../manifest.json', true))
app.use('/service-worker.js', serve('../../dist/service-worker.js', true))
app.use(microcache.cacheSeconds(1, req => useMicroCache && req.originalUrl))

function render (req, res) {
  const s = Date.now()
  res.setHeader('Content-Type', 'text/html')
  res.setHeader('Server', serverInfo)
  const handleError = err => {
    if (err.url) {
      res.redirect(err.url)
    } else if (err.code === 404) {
      res.status(404).send('404 | Page Not Found')
    } else {
      res.status(500).send('500 | Internal Server Error')
      console.error(`error during render : ${req.url}`)
      console.error(err.stack)
    }
  }

  const context = {
    title: 'Luna vues ssr 0.1', // default title
    url: req.url,
    output: {
      prepend: (context) => { return ''; },
      append: (context) => { return ''; },
      appendHead: (context) => { return ''; },
      template: 'default',
      cacheTags: new Set()
    },
    meta: null
  }
  renderer.renderToString(context, (err, html) => {
    if (err) {
      return handleError(err)
    }
    const output = minify(html,
      {
        minifyJS: true,
        minifyCSS: true})
    res.end(output)
    if (!isProd) {
      console.log(`whole request: ${Date.now() - s}ms`)
    }
  })
}

app.get('*', isProd ? render : (req, res, next) => {
  if (!renderer) {
    res.setHeader('Content-Type', 'text/html')
    res.status(202).end(HTMLContent)
    return next()
  } else {
    readyPromise.then(() => render(req, res))
  }
})

let port = process.env.PORT || config.server.port
const host = process.env.HOST || config.server.host
const start = () => {
  app.listen(port, host)
    .on('listening', () => {
      console.log('')
      console.log('')
      console.log('                                                                clc,.     ')
      console.log('                                                                 xMMMO.   ')
      console.log("                                                                  WMMMW'  ")
      console.log('  o00c        000.    .000   l00d.    .KKK.      .0KKd          .xMMMMMo  ')
      console.log("  xMMx        MMM,    .MMM.  dMMMWo   .MMM'     'WMNMMx    dOxx0WMMMMMN.")
      console.log("  dMMx        WMM,    .MMM.  dMMXXMN; .MMM'    .NMX.dMMd    :KMMMMMMNd.")
      console.log("  dMMk        WMM;    .MMM.  oMMk lWMk.MMM'   .XMW.  0MMl     .';;,.      ")
      console.log("  oMMO        NMM:    .MMM.  oMMO  .OMWMMM'   0MMNkkk0MMM;")
      console.log("  lMMX;;;;;;. lMMNc'.;0MMO   oMMO    cWMMM,  dMM0llllldMMW.")
      console.log("  :NNNNNNNNN;  'xXWMMMNO:    cNNx     .0NN' ,NNK.      oNNO")
      console.log('')
      console.log('')
      console.log('')
      console.log(`       | 🌘 Server started at http://${host}:${port} |`)
      console.log('')
      console.log('               Page will auto start soon')
      opn(`http://${host}:${port}`);
    })
    .on('error', (e) => {
      if (e.code === 'EADDRINUSE') {
        port = parseInt(port) + 1
        console.log(`The port is already in use, trying ${port}`)
        start()
      }
    })
}
start()
