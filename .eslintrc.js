module.exports = {
  "env": {
      "browser": true,
      "es2021": true,
      "jest": true
  },
  "extends": [
      "react-app",
      "react-app/jest",
      "plugin:import/typescript",
      "eslint:recommended", 
      "plugin:react/recommended", 
      "plugin:prettier/recommended"
  ],
  "parser": "@typescript-eslint/parser",
  "parserOptions": {
      "ecmaFeatures": {
          "jsx": true
      },
      "ecmaVersion": "latest",
      "sourceType": "module",
      "project": "./tsconfig.json"
  },
  "plugins": [
      "react",
      "@typescript-eslint"
  ],
  "rules": {
    'prettier/prettier': [
        'error',
        {
          'endOfLine': 'auto',
        }
      ]
  }
}