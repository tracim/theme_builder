// const noop = () => null
// require.extensions['.styl'] = noop

process.env.NODE_ENV = 'test'

import { jsdom } from 'jsdom'
// var jsdom = require('jsdom').jsdom

global.document = jsdom(`
<!DOCTYPE html>
<html>
  <head><meta charset="utf-8" /></head>
  <body>
    <div id='content' class='full-height' configEndPoint=''></div>
    <script src='bundle.js'></script>
  </body>
</html>`)
global.window = document.defaultView
Object.keys(document.defaultView).forEach((property) => {
  if (typeof global[property] === 'undefined') {
    global[property] = document.defaultView[property]
  }
})

global.navigator = {
  userAgent: 'node.js'
}
