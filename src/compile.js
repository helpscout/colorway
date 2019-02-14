const {
  manifestSepToken,
  readFile,
  writeClientFile,
  prettyLog,
  here,
  there,
} = require('./utils')

exports.get = async mod => {
  try {
    return readFile(here(`../manifests/${mod}`))
  } catch (err) {
    throw err
  }
}

exports.parseManifest = manifest => {
  const [meta, content] = manifest.split(manifestSepToken)

  return {
    meta: JSON.parse(meta),
    content,
  }
}

exports.compile = async mod => {
  if (!mod) return
  prettyLog('Syncing colorway...')

  try {
    const manifest = await exports.get(mod)
    if (!manifest) {
      console.log(
        "Hmm! We couldn't find that module's manifest. Skipping colorway sync.",
      )
      process.exit(0)
    }

    const { meta, content } = exports.parseManifest(manifest)
    const dest = there(meta.dest)

    writeClientFile(there(meta.dest), content)
    console.log(`Generated ${dest}`)
    console.log('')
  } catch (err) {
    console.log("Hmm! We couldn't generate the file.")
    process.exit(0)
  }
}
