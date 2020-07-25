export default {
  title: 'Default Theme',
  titleTemplate: '%s - Luna Ssr Boilerplate',
  htmlAttrs: {
    lang: 'en'
  },
  meta: [
    { charset: 'utf-8' },
    { vmid: 'description', name: 'description', content: '' },
    { name: 'viewport', content: 'width=device-width, initial-scale=1, minimal-ui' },
    { name: 'robots', content: 'index, follow' },
    { name: 'mobile-web-app-capable', content: 'yes' },
    { name: 'theme-color', content: '#ffffff' },
    { name: 'apple-mobile-web-app-status-bar-style', content: '#ffffff' }
  ],
  link: [
    { rel: 'icon', type: 'image/png', href: '/assets/icon-72x72.png', sizes: '32x32' },
    { rel: 'icon', type: 'image/png', href: '/assets/icon-72x72.png', sizes: '16x16' },
    { rel: 'apple-touch-icon', href: '/assets/icon-72x72.png' },
    { rel: 'apple-touch-startup-image', href: '/assets/icon-72x72.png', sizes: '72x72' },
    { rel: 'manifest', href: '/manifest.json' }
  ],
  script: [
    {
      src: 'https://cdn.jsdelivr.net/npm/pwacompat@2.0.6/pwacompat.min.js',
      async: true,
      integrity: 'sha384-GOaSLecPIMCJksN83HLuYf9FToOiQ2Df0+0ntv7ey8zjUHESXhthwvq9hXAZTifA',
      crossorigin: 'anonymous'
    }
  ]
}
