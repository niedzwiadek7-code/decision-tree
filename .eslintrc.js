module.exports = {
  env: {
    browser: true,
    commonjs: true,
    es2021: true,
  },
  extends: 'airbnb-base',
  overrides: [
  ],
  parserOptions: {
    ecmaVersion: 'latest',
  },
  rules: {
    semi: [2, 'never'],
    'global-require': 'off',
    'import/no-dynamic-require': 'off',
    'linebreak-style': 'off',
    'class-methods-use-this': 'off',
  },
}
