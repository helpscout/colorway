const { generate } = require('../generate')
const config = require('../configs').getColors()

const colorConfig = {
  ...config.previous,
  blue: config.latest.blue,
}

const content = `
const palette = ${JSON.stringify(colorConfig, null, 2)}

export default palette
`.trim()

generate({
  name: 'hsds-react',
  dest: 'src/styles/configs/colorway.ts',
  content,
})
