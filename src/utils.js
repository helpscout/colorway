const fs = require('fs')
const path = require('path')
const mkdirp = require('mkdirp')
const util = require('util')

exports.inspect = obj => {
  console.log(util.inspect(obj, false, null, true))
}

exports.here = dest => path.resolve(__dirname, dest)
exports.there = dest => path.resolve(process.cwd(), dest)

exports.readFile = dest => fs.readFileSync(exports.here(dest), 'utf8')

exports.prepareWrite = dest => {
  const dir = path.dirname(dest)
  mkdirp.sync(dir)
}

exports.writeFile = (dest, content) => {
  exports.prepareWrite(exports.here(dest))
  fs.writeFileSync(exports.here(dest), content)
}

exports.writeClientFile = (dest, content) => {
  exports.prepareWrite(exports.there(dest))
  fs.writeFileSync(exports.there(dest), content)
}

exports.manifestSepToken = '\n==COLORWAY-MANIFEST==================\n'

exports.prettyLog = (...args) => {
  console.log('🎨', '', ...args)
}
