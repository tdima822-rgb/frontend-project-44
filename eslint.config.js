import globals from 'globals'
import stylistic from '@stylistic/eslint-plugin'

export default [
  {
    files: ['**/*.js'],
    languageOptions: {
      sourceType: 'module',
      globals: {
        ...globals.node,
      },
      ecmaVersion: 'latest',
    },
    plugins: {
      '@stylistic': stylistic,
    },
    rules: {
      '@stylistic/indent': ['error', 2],
      '@stylistic/linebreak-style': ['error', 'unix'],
      '@stylistic/quotes': ['error', 'single'],
      '@stylistic/semi': ['error', 'never'],
      '@stylistic/comma-dangle': ['error', 'always-multiline'],
      '@stylistic/arrow-parens': ['error', 'as-needed'],
      '@stylistic/brace-style': ['error', '1tbs'],
      '@stylistic/max-len': ['error', { code: 100 }],
      '@stylistic/no-multiple-empty-lines': ['error', { max: 1, maxEOF: 1 }],
      '@stylistic/no-trailing-spaces': 'error',
      '@stylistic/eol-last': ['error', 'always'],
      'no-unused-vars': ['warn'],
      'no-console': 'off',
      'no-var': ['error'],
    },
  },
]
