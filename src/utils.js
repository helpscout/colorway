const fs = require('fs')
const path = require('path')

exports.here = dest => path.resolve(__dirname, dest)

exports.readFile = dest => fs.readFileSync(exports.here(dest), 'utf8')

exports.writeFile = (dest, content) =>
  fs.writeFileSync(exports.here(dest), content)

exports.manifestSepToken = '\n==COLORWAY-MANIFEST==================\n'
