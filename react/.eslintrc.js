module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  extends: ['airbnb', 'airbnb/hooks', 'plugin:prettier/recommended', 'prettier'],
  parser: 'babel-eslint',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 12,
    sourceType: 'module',
  },
  plugins: ['react', 'prettier'],
  rules: {
    'prettier/prettier': 1,
    'react/prop-types': 0,
    'linebreak-style': ['error', 'unix'],
    'arrow-body-style': 0,
    'prefer-arrow-callback': 0,
    'react/react-in-jsx-scope': 0,
    'react/jsx-filename-extension': 0,
    'max-len': [1, 100, 2],
    'import/prefer-default-export': 0,
    'react/button-has-type': 0,
    'no-unused-vars': 1,
  },
};
