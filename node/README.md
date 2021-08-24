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

## files to copy

- .eslintrc.js
- .eslintignore
- .prettierrc
- .prettierignore
- .vscode/settings.json
- .env.example
