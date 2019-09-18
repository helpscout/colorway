const config = require('../../configs').getColors()

exports.colorConfig = {
  ...config.previous,
  blue: config.latest.blue,
  indigo: config.latest.indigo,
  whaletail: config.latest.whaletail,
  yellow: config.latest.yellow,
}
