const { content: base } = require('./seed-color-scheme')

const content = `
${base}

@include _color((
  link: (
    default: _color(blue, 600),
    base: _color(blue, 600),
    hover: _color(blue, 500),
    active: _color(blue, 500),
    focus: _color(blue, 500),
  )
));
`.trim()

exports.content = content
