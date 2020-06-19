module.exports = {
  root: true,
  env: {
    'es6': true,
    'node': true,
    'browser': true,
    'jest': true,
  },
  parser: '@typescript-eslint/parser',
  plugins: [
    '@typescript-eslint',
    'prettier',
  ],
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/eslint-recommended',
    'plugin:@typescript-eslint/recommended',
    'prettier/@typescript-eslint',
    'plugin:react/recommended'
  ],
  rules: {
    'semi': ['error', 'always'],
    'quotes': ['error', 'single'],
    'linebreak-style': ['error', 'unix'],
    'prettier/prettier': 'error',
    'react/prop-types': [0],
    'react-hooks/rules-of-hooks': 'error',
    'react-hooks/exhaustive-deps': 'warn',
  },
  settings: {
    'react': {
      'pragma': 'React',  // Pragma to use, default to 'React'
      'version': 'detect', // React version. 'detect' automatically picks the version you have installed.
      // You can also use `16.0`, `16.3`, etc, if you want to override the detected value.
      // default to latest and warns if missing
      // It will default to 'detect' in the future
    },
  }
};
