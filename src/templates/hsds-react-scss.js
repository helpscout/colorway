const { generate } = require('../generate')
const { content } = require('./shared/seed-color-scheme')

generate({
  name: 'hsds-react-scss',
  dest: 'src/styles/configs/_colorway.scss',
  content,
})
