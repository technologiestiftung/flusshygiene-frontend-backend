module.exports = {
  '*.ts': () => 'tslint',
  '*.tsx': () => 'tslint',
  '**/*.+(js|jsx|json|yml|yaml|css|less|scss|ts|tsx|md|mdx|graphql|vue)': () =>
    'prettier --write',
};
