const { generate } = require('../generate')
const { content } = require('./shared/seed-color-scheme')

generate({
  name: 'doc-article-styles',
  dest: 'src/scss/configs/_colorway.scss',
  content,
})
