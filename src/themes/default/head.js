export default {
  title: 'Default Theme',
  titleTemplate: '%s - Luna Ssr Boilerplate',
  htmlAttrs: {
    lang: 'en'
  },
  meta: [
    { charset: 'utf-8' },
    { vmid: 'description', name: 'description', content: '' },
    { name: 'robots', content: 'index, follow' },
    { name: 'mobile-web-app-capable', content: 'yes' },
    { name: 'theme-color', content: '#ffffff' },
    { name: 'apple-mobile-web-app-status-bar-style', content: '#ffffff' }
  ],
  link: [
    { rel: 'icon', type: 'image/png', href: '/assets/icons/icon-72x72.png', sizes: '72x72' },
    { rel: 'icon', type: 'image/png', href: '/assets/icons/icon-144x144.png', sizes: '144x144' },
    { rel: 'apple-touch-icon', href: '/assets/icon-72x72.png' },
    { rel: 'apple-touch-startup-image', href: '/assets/icons/icon-72x72.png', sizes: '72x72' },
    { rel: 'manifest', href: '/assets/manifest.json' }
  ],
  script: [
    {
      src: 'https://apis.google.com/js/api:client.js'
    }
  ]
}
