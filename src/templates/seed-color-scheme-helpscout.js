const { generate } = require('../generate')
const config = require('../configs').getColors()
const { warning } = require('./shared/warning')
const { latest } = config

const generateColorScheme = () => {
  let output = ''
  latest['gold'] = latest['yellow']

  Object.keys(latest).forEach(color => {
    const shades = latest[color]
    output += `
      ${color}: (
        ${JSON.stringify(shades, null, 2).replace(/{|}|"/g, '')}
      ),
    `
  })

  return output
}

const content = `
${warning}

$seed-color-scheme-helpscout: (
  white: #fff,
  black: #000,

  ${generateColorScheme()}

  text: (
    default: #2b2b2b
  ),

  button: (
    border: #d5d5d5,
    hover: #e6e6e6,
    active: #b6b6b6
  )
) !default;
`.trim()

generate({
  name: 'seed-color-scheme-helpscout',
  dest:
    'packages/seed-color-scheme-helpscout/scss/pack/seed-color-scheme-helpscout/_config.scss',
  content,
})
