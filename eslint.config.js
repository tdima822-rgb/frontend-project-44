
import globals from 'globals';
import stylisticJs from '@stylistic/eslint-plugin-js';

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
      '@stylistic/js': stylisticJs,
    },
    rules: {
      // Правила Stylistic
      '@stylistic/js/indent': ['error', 2],
      '@stylistic/js/linebreak-style': ['error', 'unix'],
      '@stylistic/js/quotes': ['error', 'single'],
      '@stylistic/js/semi': ['error', 'always'],
      '@stylistic/js/comma-dangle': ['error', 'always-multiline'],
      '@stylistic/js/arrow-parens': ['error', 'always'],
      '@stylistic/js/brace-style': ['error', '1tbs'],
      '@stylistic/js/max-len': ['error', { code: 100 }],
      
      // Базовые правила
      'no-unused-vars': ['warn'],
      'no-console': 'off',
      'no-var': ['error'],
    },
  },
];