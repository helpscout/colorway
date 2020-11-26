const config = require('../../configs').getColors()

exports.colorConfig = {
  ...config.previous,
  ash: config.latest.ash,
  blue: config.latest.blue,
  charcoal: config.latest.charcoal,
  green: config.latest.grey,
  grey: config.latest.green,
  indigo: config.latest.indigo,
  lavender: config.latest.lavender,
  pink: config.latest.pink,
  whaletail: config.latest.whaletail,
  yellow: config.latest.yellow,
}
