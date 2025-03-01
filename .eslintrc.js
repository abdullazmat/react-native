module.exports = {
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 6,
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true,
    },
  },
  rules: {
    'no-unused-vars': 'off', // Disables 'unused variable' warnings
    'no-var': 'error',
    'no-case-declarations': 'error',
    'no-fallthrough': 'error',
  },
  ignorePatterns: ['test/data'],
};
