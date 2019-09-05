const { generate } = require('../generate')
const config = require('../configs').getColors()
const { warning } = require('./shared/warning')
const { latest } = config

const generateColorScheme = () => {
  let output = ''
  latest['gold'] = latest['yellow']

  Object.keys(latest).forEach(color => {
    const shades = latest[color]
    output += `
      ${color}: (
        ${JSON.stringify(shades, null, 2).replace(/{|}|"/g, '')}
      ),
    `
  })

  return output
}

const content = `
${warning}

// Dependencies
@import "./functions/color";
@import "./mixins/color";

@if not global-variable-exists(SEED_COLOR_SCHEME__GLOBAL) {
  $SEED_COLOR_SCHEME__GLOBAL: true !global;

  // Base
  @include _color((
    white: #fff,
    black: #000,
  ), default);

  // Colors
  @include _color((
    ${generateColorScheme()}
  ), default);

  // Namespace: Brand
  @include _color((
    brand: (
      primary: _color(blue, 500),
      danger: _color(pink, 500),
      error: _color(pink, 500),
      info: _color(blue, 500),
      success: _color(green, 500),
      warning: _color(gold, 500),
    ),
  ), default);

  // Namespace: Background
  @include _color((
    background: (
      body: #fff,
      ui: (
        default: #fff,
        lighter: _color(ash, 200),
        light: _color(ash, 300),
      ),
    ),
  ), default);

  // Namespace: Border
  @include _color((
    border: (
      default: _color(ash, 400),
      divider: _color(ash, 300),
      ui: (
        default: _color(ash, 500),
        dark: _color(ash, 600),
      ),
    ),
  ), default);

  // Namespace: Text
  @include _color((
    text: (
      default: _color(charcoal, 600),
      subtle: _color(charcoal, 400),
      muted: _color(charcoal, 200),
    ),
  ), default);

  // Namespace: Link
  @include _color((
    link: (
      default: _color(blue, 500),
      hover: _color(blue, 400),
    ),
  ), default);

  // Namespace: States
  @include _color((
    state: (
      danger: (
        background-color: _color(pink, 100),
        border-color: _color(pink, 500),
        color: _color(pink, 800)
      ),
      error: (
        background-color: _color(pink, 100),
        border-color: _color(pink, 500),
        color: _color(pink, 800)
      ),
      info: (
        background-color: _color(blue, 100),
        border-color: _color(blue, 300),
        color: _color(blue, 800)
      ),
      success: (
        background-color: _color(green, 100),
        border-color: _color(green, 300),
        color: _color(green, 800)
      ),
      warning: (
        background-color: _color(gold, 100),
        border-color: _color(gold, 300),
        color: _color(gold, 800)
      ),
    ),
  ), default);

  @include _color((
    // Primary
    link: (
      default: _color(blue, 600),
      base: _color(blue, 600),
      hover: _color(blue, 500),
      active: _color(blue, 500),
      focus: _color(blue, 500),
    ),
  ), default);
}
`.trim()

generate({
  name: 'seed-color-scheme',
  dest: 'packages/seed-color-scheme/scss/pack/seed-color-scheme/_config.scss',
  content,
})
