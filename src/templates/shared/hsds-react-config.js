const config = require('../../configs').getColors()

exports.colorConfig = {
  ...config.previous,
  ash: config.latest.ash,
  blue: config.latest.blue,
  charcoal: config.latest.charcoal,
  grey: config.latest.grey,
  indigo: config.latest.indigo,
  lavender: config.latest.lavender,
  whaletail: config.latest.whaletail,
  yellow: config.latest.yellow,
}
