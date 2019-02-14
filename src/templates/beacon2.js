const { generate } = require('../generate')
const { content } = require('./shared/seed-color-scheme')

generate({
  name: 'beacon2',
  dest: 'src/scss/patches/_colorway.scss',
  content,
})
