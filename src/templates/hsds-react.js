const { generate } = require('../generate')
const config = require('../configs').getColors()
const { warning } = require('./shared/warning')

const colorConfig = {
  ...config.previous,
  blue: config.latest.blue,
  yellow: config.latest.yellow,
  indigo: config.latest.indigo,
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
