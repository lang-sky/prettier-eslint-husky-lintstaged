module.exports = {
  env: {
    browser: false,
    es6: true,
    node: true,
  },
  extends: ['airbnb-base', 'plugin:prettier/recommended', 'prettier'],
  parser: 'babel-eslint',
  parserOptions: {
    ecmaVersion: 12,
    sourceType: 'module',
  },
  plugins: ['prettier'],
  rules: {
    'prettier/prettier': 1,
    'linebreak-style': ['error', 'unix'],
    'arrow-body-style': 0,
    'prefer-arrow-callback': 0,
    'max-len': [1, 100, 2],
    'no-unused-vars': 1,
  },
};
