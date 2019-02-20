# Creating a Template

Colorway generates module [manifest](./manifests.md) files from `src/template/*.js` template files.

The templates are written with regular JavaScript (node). The result should be a `string`, which is passed to the `generate()` function under the `content` key.

Since the output is a `string`, your template can generate any file content you need.

## Example

In the following example, we're going to:

- Grab the colors from the `config` using the `getColors()` function
- Define a `palette` object with a combination of previous and latest color values
- Output the contents as a TypeScript file

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

## Next

Next, let's look into [generating a manifest](./manifests.md).
