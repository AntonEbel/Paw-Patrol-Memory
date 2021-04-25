module.exports = {
  parser: 'babel-eslint',
  env: {
    browser: true,
    commonjs: true,
    es6: true,
    node: true,
    jest: true,
  },
  extends: ['eslint:recommended', 'plugin:react/recommended'],
  parserOptions: {
    ecmaFeatures: {
      experimentalObjectRestSpread: true,
      jsx: true,
    },
    sourceType: 'module',
  },
  plugins: ['react', 'react-native'],
  rules: {
    quotes: ['error', 'single'],
    semi: ['error', 'always'],
    'no-console': ['warn', {allow: ['info', 'error']}],
    'arrow-parens': ['error', 'always'],
    'react/no-did-mount-set-state': 2,
    'react/no-direct-mutation-state': 2,
    'react/jsx-uses-vars': 2,
    'no-undef': 2,
    'react/prop-types': 2,
    'react/jsx-no-bind': 2,
    'react/jsx-no-duplicate-props': 2,
  },
};