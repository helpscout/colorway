const axios = require('axios')
const {
  manifestSepToken,
  writeClientFile,
  prettyLog,
  there,
} = require('./utils')
const isOnline = require('is-online')

const BASE_URL =
  'https://raw.githubusercontent.com/helpscout/colorway/master/modules/'

const getModuleUrl = url => (url ? `${BASE_URL}${url}` : null)

exports.get = async url => {
  if (!url) return

  try {
    const fetchUrl = getModuleUrl(url)
    const results = await axios.get(fetchUrl)

    return results.data
  } catch (err) {
    console.log(err)
    process.exit(1)
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

  console.log(argv)
  process.exit(0)
  prettyLog('Syncing colorway...')

  try {
    const online = await isOnline()
    if (!online) {
      console.log("Hmm! Looks like you're offline. Skipping colorway sync.")
      process.exit(0)
    }

    const manifest = await exports.get(mod)
    if (!manifest) {
      console.log(
        "Hmm! We couldn't find that module's manifest. Skipping colorway sync.",
      )
      process.exit(0)
    }

    const { meta, content } = exports.parseManifest(manifest)
    const dest = there(meta.dest)

    console.log('')
    writeClientFile(there(meta.dest), content)
    console.log(`Generated ${dest}`)
    console.log('')
  } catch (err) {
    console.log(err)
    process.exit(1)
  }
}
