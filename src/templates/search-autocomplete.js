const { generate } = require('../generate')
const config = require('../configs').getColors()
const { latest } = config
const { warning } = require('./shared/warning')

const generateLatestColorScheme = () => {
  let output = ''
  const targets = ['blue', 'yellow']

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

const content = `
${warning}

@import "pack/seed-color-scheme/__index";

@include _color((
  ${generateLatestColorScheme()}
));

@include _color((
  link: (
    default: _color(blue, 600),
    base: _color(blue, 600),
    hover: _color(blue, 500),
    active: _color(blue, 500),
    focus: _color(blue, 500),
  ),
), default);
`.trim()

generate({
  name: 'search-autocomplete',
  dest: 'src/styles/configs/_seed-color-scheme.scss',
  content,
})
