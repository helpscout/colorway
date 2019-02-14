#!/usr/bin/env node

const { compile } = require('./compile')
const argv = require('minimist')(process.argv.slice(2))
const pkg = require('../package.json')

const { manifest: mod } = argv

const message = `
🎨  Colorway (v${pkg.version})

Help Scout's color management syncing system.

Usage: colorway --manifest=my-project
  `

if (mod) {
  compile(mod)
} else {
  console.log('\n', message.trim())
}
