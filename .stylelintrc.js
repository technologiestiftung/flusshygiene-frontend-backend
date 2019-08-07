// see https://github.com/stylelint/stylelint
//
// for vscode see https://github.com/shinnn/vscode-stylelint
module.exports = {
  extends: 'stylelint-config-standard',
  plugins: ['stylelint-scss'],
  rules: {
    'at-rule-no-unknown': [
      true,
      {
        ignoreAtRules: ['function', 'if', 'each', 'include', 'mixin', 'for'],
      },
    ],
  },
};
