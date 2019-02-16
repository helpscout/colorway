const pkg = require('../../../package.json')

exports.warning = `
// Generated with @helpscout/colorway (v${pkg.version})
//
// This file was automatically generated with @helpscout/colorway
// Please don't modify this file. Your changes will be overwritten.
// Instead, update the template at:
// https://github.com/helpscout/colorway
`.trim()

exports.content = exports.warning
