'use strict'

if (process.env.NODE_ENV === 'production') {
  module.exports = require('./dist/test-utils.cjs.prod.js')
} else {
  module.exports = require('./dist/test-utils.cjs.js')
}
