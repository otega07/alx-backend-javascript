/* global process, module */
module.exports = {
  env: {
    browser: false,
    es6: true,
    jest: true,
    node: true,
  },
  extends: [
    'airbnb-base',
    'plugin:jest/all',
  ],
  globals: {
    process: 'readonly',
    module: 'readonly',
  },
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: 'module',
  },
  plugins: ['jest'],
  rules: {
    'max-classes-per-file': 'off',
    'no-underscore-dangle': 'off',
    'no-console': 'off',
    'no-shadow': 'off',
    'no-restricted-syntax': ['error', 'LabeledStatement', 'WithStatement'],
    'no-unused-vars': 'off', // Disable 'no-unused-vars' globally
    'no-undef': 'off',       // Disable 'no-undef' globally
  },
  overrides: [
    {
      files: ['*.js'],
      excludedFiles: 'babel.config.js',
    }
  ],
};

// eslint-disable-next-line no-unused-vars
const unusedProcess = process;

// eslint-disable-next-line no-unused-vars, no-undef
const unusedModule = module;
