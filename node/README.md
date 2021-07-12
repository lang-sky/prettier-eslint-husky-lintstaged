# Node

## Install packages

```bash
npm info "eslint-config-airbnb-base@latest" peerDependencies
npx install-peerdeps --dev eslint-config-airbnb-base
yarn add -D babel-eslint prettier eslint-plugin-prettier eslint-config-prettier lint-staged husky@^4.3.8
```

## Add following to package.json

```json
{
  "scripts": {
    "pre-commit": "lint-staged",
    "lint:fix": "eslint --fix \"**/*.js\" && prettier --write \"**/*.{js,jsx,json,css,md}\"",
    "lint": "eslint \"**/*.js\" && prettier --check \"**/*.{js,jsx,json,css,md}\""
  },
  "husky": {
    "hooks": {
      "pre-commit": "lint-staged"
    }
  },
  "lint-staged": {
    "*.js": ["eslint --fix", "prettier --write --ignore-unknown"],
    "*.+(json|css|md)": ["prettier --write"]
  }
}
```

## .eslintrc.js

Create a file `.eslintrc.js` and copy the following

```js
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
```

## .prettierrc

Create a file `.prettierrc` and copy the following

```json
{
  "arrowParens": "always",
  "printWidth": 100,
  "semi": true,
  "singleQuote": true,
  "trailingComma": "es5"
}
```

## .eslintignore

Create a file `.eslintignore` and copy the following

```json
node_modules
.vscode
.git
public
```

## .vscode/settings.json

Create a file `.vscode/settings.json` and copy the following

```json
{
  "editor.formatOnSave": true,
  "[html]": {
    "editor.defaultFormatter": "esbenp.prettier-vscode"
  },
  "[javascript]": {
    "editor.defaultFormatter": "esbenp.prettier-vscode"
  },
  "[jsonc]": {
    "editor.defaultFormatter": "esbenp.prettier-vscode"
  },
  "[markdown]": {
    "editor.defaultFormatter": "esbenp.prettier-vscode"
  },
  "[typescript]": {
    "editor.defaultFormatter": "esbenp.prettier-vscode"
  },
  "[typescriptreact]": {
    "editor.defaultFormatter": "esbenp.prettier-vscode"
  }
}
```
