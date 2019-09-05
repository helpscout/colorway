const config = require('../../configs').getColors()
const { warning } = require('./warning')
const { latest } = config

const content = `
${warning}

@import 'pack/seed-color-scheme/_index';

@include _color((
  blue:
    (
      default: ${latest.blue.default},
      100: ${latest.blue['100']},
      200: ${latest.blue['200']},
      300: ${latest.blue['300']},
      400: ${latest.blue['400']},
      500: ${latest.blue['500']},
      600: ${latest.blue['600']},
      700: ${latest.blue['700']},
      800: ${latest.blue['800']},
      900: ${latest.blue['900']},
    ),
));

@include _color((
  yellow:
    (
      default: ${latest.yellow.default},
      100: ${latest.yellow['100']},
      200: ${latest.yellow['200']},
      300: ${latest.yellow['300']},
      400: ${latest.yellow['400']},
      500: ${latest.yellow['500']},
      600: ${latest.yellow['600']},
      700: ${latest.yellow['700']},
      800: ${latest.yellow['800']},
      900: ${latest.yellow['900']},
    ),
));
`.trim()

exports.content = content
