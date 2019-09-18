const { generate } = require('../generate')
const config = require('../configs').getColors()
const { warning } = require('./shared/warning')

const colorConfig = {
  ...config.previous,
  ash: config.latest.ash,
  blue: config.latest.blue,
  indigo: config.latest.indigo,
  lavender: config.latest.lavender,
  whaletail: config.latest.whaletail,
  yellow: config.latest.yellow,
}

const content = `
${warning}

const palette = ${JSON.stringify(colorConfig, null, 2)}

export default palette
`.trim()

generate({
  name: 'hsds-react',
  dest: 'src/styles/configs/colorway.ts',
  content,
})
