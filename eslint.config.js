const path = require('path');
const { typescript } = require('@eslint/js'); // Include the TypeScript plugin here if needed

module.exports = [
  {
    files: ['src/**/*.{ts,tsx}'], // Define files to lint
    languageOptions: {
      parser: '@typescript-eslint/parser', // Use this instead of "parser" key
      parserOptions: {
        project: path.resolve(__dirname, './tsconfig.json'),
        sourceType: 'module',
      },
    },
    plugins: {
      '@typescript-eslint': require('@typescript-eslint/eslint-plugin'),
      prettier: require('eslint-plugin-prettier'),
    },
    rules: {
      // Prettier config
      'prettier/prettier': 'error',
      // TypeScript specific rules
      '@typescript-eslint/no-explicit-any': 'off',
      '@typescript-eslint/no-unused-vars': [
        'error',
        {
          vars: 'all',
          args: 'after-used',
          argsIgnorePattern: '^_',
        },
      ],
      'no-console': 'warn',
      eqeqeq: ['error', 'smart'],
    },
    ignores: ['node_modules/', '/generated.tsx', 'dist/'], // Ignore patterns
  },
];
