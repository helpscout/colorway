# 🎨 Colorway

[![Build Status](https://travis-ci.org/helpscout/colorway.svg?branch=master)](https://travis-ci.org/helpscout/colorway)
[![npm version](https://badge.fury.io/js/%40helpscout%2Fcolorway.svg)](https://badge.fury.io/js/%40helpscout%2Fcolorway)

> A color management syncing system

## Table of Contents

<!-- START doctoc generated TOC please keep comment here to allow auto update -->
<!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN doctoc TO UPDATE -->

- [Installation](#installation)
- [Usage](#usage)
- [Templates](#templates)
  - [`generate({ name, dest, content})`](#generate-name-dest-content)
- [Integrations](#integrations)
- [See Also](#see-also)

<!-- END doctoc generated TOC please keep comment here to allow auto update -->

## Installation

```
npm install --save-dev @helpscout/colorway
```

## Usage

Run the `colorway` command with the manifest you wish to sync, example:

```
colorway --manifest=hsds-react
```

For a more automated/magical feed, we recommend you add this as a `prestart` or `prebuild` command in your `package.json`:

```
{
  ...
  "colorway": "colorway --manifest=hsds-react",
  "prestart": "colorway",
  ...
}
```

## Templates

Colorway generates module manifest files from `src/template/*.js` templates.

**Example**

```js
const { generate } = require('../generate')
const config = require('../configs').getColors()

const colorConfig = {
  ...config.previous,
  blue: config.latest.blue,
}

const content = `
const palette = ${JSON.stringify(colorConfig, null, 2)}

export default palette
`

generate({
  name: 'hsds-react',
  dest: 'src/styles/configs/colorway.ts',
  content: content.trim(),
})
```

### `generate({ name, dest, content})`

| Prop    | Type     | Description                                                 |
| ------- | -------- | ----------------------------------------------------------- |
| name    | `string` | The name of your module.                                    |
| dest    | `string` | The destination the file will be generated in your project. |
| content | `string` | The final contents of the file.                             |

## Integrations

| Application / Project                                                 | Status     |
| --------------------------------------------------------------------- | ---------- |
| [doc-article-styles](https://github.com/helpscout/doc-article-styles) | Integrated |
| [hsds-react](https://github.com/helpscout/hsds-react)                 | Integrated |
| search-autocomplete                                                   | Integrated |
| [seed](https://github.com/helpscout/seed)                             | Integrated |
| hs-app                                                                | Integrated |
| beacon2                                                               | Pending    |
| developer                                                             | --         |
| styleguide                                                            | --         |

## See Also

- [colorway-sketch](https://github.com/helpscout/colorway-sketch)
