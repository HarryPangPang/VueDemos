module.exports = {
  root: true,
  env: {
    node: true,
  },
  extends: [
    'plugin:vue/essential',
    '@vue/airbnb',
    '@vue/typescript',
  ],
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'max-len': 'off',
    'no-extra-semi': 'off',
    'no-plusplus': 'off',
    'vue/no-use-v-if-with-v-for': 'off'
  },
  parserOptions: {
    parser: '@typescript-eslint/parser',
  },
};
