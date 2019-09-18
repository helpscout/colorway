const { generate } = require('../generate')
const { warning } = require('./shared/warning')
const { colorConfig } = require('./shared/hsds-react-config')

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
