#!/usr/bin/env node

const { compile } = require('./compile')
const { find, closest } = require('./find')
const argv = require('minimist')(process.argv.slice(2))
const pkg = require('../package.json')

const { _, manifest, generate } = argv

const message = `
🎨  Colorway (v${pkg.version})

Help Scout's color management syncing system.

Usage: colorway --manifest=my-project
  `

let mod = manifest || generate
const isFindAction = _ && Array.isArray(_) && _[0] === 'find'
const isClosestAction = _ && Array.isArray(_) && _[0] === 'closest'
if (isFindAction && _[1]) {
  find(_[1])
} else if (isClosestAction && _[1]) {
  closest(_[1])
} else if (mod) {
  compile(mod)
} else {
  console.log('\n', message.trim())
}
