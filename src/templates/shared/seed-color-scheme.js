const config = require('../../configs').getColors()

const { latest } = config

const content = `
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
`.trim()

exports.content = content
