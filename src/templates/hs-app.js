const { generate } = require('../generate')
const config = require('../configs').getColors()
const { previous, latest } = config

const generateLatestColorScheme = () => {
  let output = ''
  const targets = ['blue', 'indigo', 'whaletail', 'yellow']

  Object.keys(latest).forEach(color => {
    if (targets.includes(color)) {
      const shades = latest[color]
      output += `
        ${color}: (
          ${JSON.stringify(shades, null, 2).replace(/{|}|"/g, '')}
        ),
      `
    }
  })

  return output
}
const generatePreviousColorScheme = () => {
  let output = ''
  const targets = ['charcoal', 'grey', 'green', 'red', 'purple', 'orange']

  Object.keys(previous).forEach(color => {
    if (targets.includes(color)) {
      const shades = previous[color]
      output += `
        ${color}: (
          ${JSON.stringify(shades, null, 2).replace(/{|}|"/g, '')}
        ),
      `
    }
  })

  return output
}

const content = `
// This file was automatically generated with @helpscout/colorway
// Please don't modify this file. Your changes will be overwritten.
// Instead, update the template at:
// https://github.com/helpscout/colorway

$seed-color-scheme-helpscout: (
  white: #fff,
  black: #000,

  ${generateLatestColorScheme()}
  ${generatePreviousColorScheme()}

  text: (
    default: #2b2b2b
  ),

  button: (
    border: #d5d5d5,
    hover: #e6e6e6,
    active: #b6b6b6
  ),

  link: (
    default: #0077CC,
    base: #0077CC,
    hover: #1292EE,
    active: #1292EE,
    focus: #1292EE
  )
);

@import "pack/seed-color-scheme-helpscout/_index";
`.trim()

generate({
  name: 'hs-app',
  dest: 'site/scss/config/_seed-color-scheme-helpscout.scss',
  content,
})
