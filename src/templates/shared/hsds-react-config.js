const config = require('../../configs').getColors()

exports.colorConfig = {
  ...config.previous,
  ash: config.latest.ash,
  blue: config.latest.blue,
  charcoal: config.latest.charcoal,
  green: config.latest.green,
  grey: config.latest.grey,
  indigo: config.latest.indigo,
  lavender: config.latest.lavender,
  pink: config.latest.pink,
  whaletail: config.latest.whaletail,
  yellow: config.latest.yellow,
}
