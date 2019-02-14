const latestConfig = require('../data/colors.json')
const previousConfig = require('../data/colors-previous.json')

exports.getColors = () => {
  return {
    latest: latestConfig,
    previous: previousConfig,
  }
}
