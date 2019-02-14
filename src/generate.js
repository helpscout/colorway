const { here, writeFile, manifestSepToken } = require('./utils')
const pkg = require('../package.json')
const glob = require('fast-glob')

exports.generate = async props => {
  try {
    const { name, dest, content } = props
    const meta = {
      colorway: `v${pkg.version}`,
      name,
      dest,
    }

    const manifest = [JSON.stringify(meta, null, 2), manifestSepToken, content]
      .join('')
      .trim()

    writeFile(`../manifests/${name}`, manifest)
    writeFile(`../dist/${name}/${dest}`, content)

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
