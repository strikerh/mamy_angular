const path = require("path");
const colors = require('tailwindcss/colors');
const generatePalette = require(path.resolve(__dirname, ('src/styles/tailwind/utils/generate-palette')));
/** @type {import('tailwindcss').Config} */

/**
 * Themes
 */

const mmyPrimary =generatePalette('#9f2d2d');
const mmyAccent =generatePalette('#0b8c89');

const themes = {
  // Default theme is required for theming system to work correctly
  'default': {
    primary  : {
      ...mmyPrimary,
      DEFAULT: mmyPrimary[600]
    },
    accent   : {
      ...mmyAccent,
      DEFAULT: mmyAccent[700]
    },
    warn     : {
      ...colors.red,
      DEFAULT: colors.red[600]
    },
    'on-warn': {
      500: colors.red['50']
    }
  },

};


module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {},
  },
  plugins: [
    require(path.resolve(__dirname, ('src/styles/tailwind/plugins/extract-config'))),
    require(path.resolve(__dirname, ('src/styles/tailwind/plugins/utilities'))),
    require(path.resolve(__dirname, ('src/styles/tailwind/plugins/icon-size'))),
    require(path.resolve(__dirname, ('src/styles/tailwind/plugins/theming')))({themes}),
    // Other third party and/or custom plugins
    require('@tailwindcss/typography')({modifiers: ['sm', 'lg']}),
    require('@tailwindcss/aspect-ratio'),
    require('@tailwindcss/line-clamp'),
    require('tailwindcss-rtl')
  ],
}
