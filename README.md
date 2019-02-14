<!-- START doctoc generated TOC please keep comment here to allow auto update -->
<!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN doctoc TO UPDATE -->

- [🎨 Colorway](#-colorway)
  - [Installation](#installation)
  - [Usage](#usage)
  - [Templates](#templates)
    - [`generate({ name, dest, content})`](#generate-name-dest-content)

<!-- END doctoc generated TOC please keep comment here to allow auto update -->

# 🎨 Colorway

> A color management syncing system

## Installation

```
npm install --save-dev @helpscout/colorway
```

## Usage

Run the `colorway` command with the module you wish to sync, example:

```
colorway --module=hsds-react
```

For a more automated/magical feed, we recommend you add this as a `prestart` or `prebuild` command in your `package.json`:

```
{
  ...
  "colorway": "colorway --module=hsds-react",
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
