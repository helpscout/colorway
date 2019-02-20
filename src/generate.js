const prettier = require('prettier')
const path = require('path')
const { here, writeFile, manifestSepToken } = require('./utils')
const pkg = require('../package.json')
const glob = require('fast-glob')

const parsers = {
  css: 'css',
  graphql: 'graphql',
  html: 'html',
  js: 'babel',
  json: 'json',
  markdown: 'markdown',
  md: 'markdown',
  mdx: 'mdx',
  scss: 'scss',
  ts: 'typescript',
  yaml: 'yaml',
  yml: 'yaml',
}

const formatContent = (dest, content) => {
  const ext = path.extname(dest).replace('.', '')
  let parser = parsers[ext]

  if (!parser) return content

  return prettier.format(content, {
    singleQuote: true,
    trailingComma: 'es5',
    semi: false,
    parser,
  })
}

exports.generate = async props => {
  try {
    const { name, dest, content } = props
    const meta = {
      colorway: `v${pkg.version}`,
      name,
      dest,
    }

    const formattedContent = formatContent(dest, content)

    const manifest = [
      JSON.stringify(meta, null, 2),
      manifestSepToken,
      formattedContent,
    ]
      .join('')
      .trim()

    writeFile(`../manifests/${name}`, manifest)
    writeFile(`../dist/${name}/${dest}`, formattedContent)

    console.log(`Generated ${name}`)
  } catch (err) {
    console.log(err)
    process.exit(1)
  }
}

exports.generateTemplates = async () => {
  console.log('')
  console.log('Generating templates...')
  const files = await glob(here('./templates/**/*'))
  await files.forEach(require)
  console.log('')
  console.log('Finished generating templates!')
}

exports.generateTemplates()
