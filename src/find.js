const { prettyLog, readFile, here } = require('./utils')
const { colorConfig } = require('./templates/shared/hsds-react-config')

exports.find = async color => {
  if (!color) return
  prettyLog('Finding HSDS-React color')

  try {
    if (color.includes('.')) {
      const [group, shade] = color.split('.')

      if (colorConfig[group] && colorConfig[group][shade]) {
        console.log('   ', `${color}: ${colorConfig[group][shade]}`)
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

    const nearest = nearestColor(color.replace('#', ''))

    console.log('   ', `${nearest.name}: ${nearest.value}`)
  } catch (err) {
    console.log(`Hmm! We couldn't find ${color}.`)
    process.exit(0)
  }
}
