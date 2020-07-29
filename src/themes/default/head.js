export default {
  title: 'Default Theme',
  titleTemplate: '%s - Luna Ssr Boilerplate',
  htmlAttrs: {
    lang: 'en'
  },
  meta: [
    { charset: 'utf-8' },
    { vmid: 'description', name: 'description', content: '' },
    { name: 'viewport', content: 'width=device-width, initial-scale=1, minimal-ui user-scalable="no"' },
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
    { rel: 'manifest', href: '/assets/manifest.json' },
    { rel: 'preconnect', href: 'https://fonts.gstatic.com/', crossorigin: 'anonymous' }
  ],
  script: [
    {
      src: 'https://cdn.jsdelivr.net/npm/pwacompat@2.0.10/pwacompat.min.js',
      async: true,
      integrity:
        'sha384-I1iiXcTSM6j2xczpDckV+qhhbqiip6FyD6R5CpuqNaWXvyDUvXN5ZhIiyLQ7uuTh',
      crossorigin: 'anonymous'
    }
  ]
}
