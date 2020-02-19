const config = require('../../configs').getColors()

exports.colorConfig = {
  ...config.previous,
  blue: config.latest.blue,
  indigo: config.latest.indigo,
  whaletail: config.latest.whaletail,
  lavender: config.latest.lavender,
  yellow: config.latest.yellow,
}
