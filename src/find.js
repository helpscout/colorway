const util = require('util')
const { prettyLog, readFile, here } = require('./utils')
const { getColors } = require('./configs')

const inspect = obj => {
  console.log(util.inspect(obj, false, null, true))
}

const get = async () => {
  try {
    return readFile(here(`../data/colors.json`))
  } catch (err) {
    throw err
  }
}

exports.find = async color => {
  if (!color) return
  prettyLog('Finding HSDS-React color')

  try {
    const colors = getColors().hsdsConfig
    if (color.includes('.')) {
      const [group, shade] = color.split('.')

      if (colors[group] && colors[group][shade]) {
        console.log('   ', `${color}: ${colors[group][shade]}`)
        return
      }
    }
    console.log(`Hmm! We couldn't find ${color}.`)
  } catch (err) {
    console.log(`Hmm! We couldn't find ${color}.`)
    process.exit(0)
  }
}

exports.closest = async color => {
  if (!color) return
  prettyLog(`Finding the closest HSDS-React color for "${color}"`)

  try {
    const config = getColors()
    const colorConfig = {
      ...config.previous,
      blue: config.latest.blue,
    }

    // flatten colors
    const flattenColors = {}
    Object.keys(colorConfig).forEach(group => {
      Object.keys(colorConfig[group]).forEach(shade => {
        if (shade !== 'default') {
          const shadeColor = colorConfig[group][shade]
          flattenColors[`${group}.${shade}`] = shadeColor
        }
      })
    })

    const nearestColor = require('nearest-color').from(flattenColors)

    const nearest = nearestColor(color)

    console.log('   ', `${nearest.name}: ${nearest.value}`)
  } catch (err) {
    console.log(`Hmm! We couldn't find ${color}.`)
    process.exit(0)
  }
}
