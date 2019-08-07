const postcssPresetEnv = require('postcss-preset-env');
const atImport = require('postcss-import');
module.exports = {
  plugins: [
    require('postcss-import'),
    postcssPresetEnv({
      autoprefixer: { grid: 'autoplace' },
    }),
    // require('autoprefixer')({ grid: true }),
    // require('postcss-unrgba'),
    require('cssnano'),
  ],
  // syntax: 'postcss-scss',
};
