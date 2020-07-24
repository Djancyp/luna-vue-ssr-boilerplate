export function registerTheme (themeName, app, routes, store, config, ssrContext) {
  const themeEntryPoint = require('../../src/themes/default/index')
  if (themeEntryPoint != null && themeEntryPoint.initTheme) {
    themeEntryPoint.initTheme(app, routes, store, config, ssrContext) // register theme
  } else {
    throw new Error('Wrong theme name: ' + themeName)
  }
}
