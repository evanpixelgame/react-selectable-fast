const path = require('path')

module.exports = {
  extends: [
    'airbnb',
    'plugin:@typescript-eslint/eslint-recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:@typescript-eslint/recommended-requiring-type-checking',
    'prettier',
    'prettier/react',
    'prettier/@typescript-eslint'
  ],
  env: {
    browser: true,
    es6: true
  },
  parser: '@typescript-eslint/parser',
  parserOptions: {
    project: path.resolve(__dirname, './tsconfig.test.json'),
    sourceType: 'module'
  },
  settings: {
    'import/resolver': {
      node: {
        extensions: ['.js', '.jsx', '.ts', '.tsx']
      }
    }
  },
  ignorePatterns: ['/generated.tsx', 'node_modules/'],
  plugins: ['prettier', '@typescript-eslint'],
  rules: {
    'prettier/prettier': 'error',
    '@typescript-eslint/no-explicit-any': 'off',
    '@typescript-eslint/no-use-before-define': 'off',
    '@typescript-eslint/no-non-null-assertion': 'off',
    '@typescript-eslint/explicit-function-return-type': 'off',
    '@typescript-eslint/interface-name-prefix': 'off',
    '@typescript-eslint/class-name-casing': 'error',
    '@typescript-eslint/camelcase': 'off',
    '@typescript-eslint/indent': 'off',
    '@typescript-eslint/no-param-reassign': 'off',
    '@typescript-eslint/no-this-alias': 'error',
    '@typescript-eslint/quotes': 'off',
    '@typescript-eslint/space-within-parens': ['off', 'never'],
    '@typescript-eslint/type-annotation-spacing': 'off',
    '@typescript-eslint/ban-ts-ignore': 'off',
    '@typescript-eslint/prefer-regexp-exec': 'off',
    '@typescript-eslint/no-var-requires': 'off',
    '@typescript-eslint/unbound-method': 'off',
    '@typescript-eslint/no-empty-function': 'off',
    'no-unused-vars': 'off',
    '@typescript-eslint/no-unused-vars': [
      'error',
      {
        vars: 'all',
        args: 'after-used',
        argsIgnorePattern: '^_',
        ignoreRestSiblings: false,
        ignoreRestSiblings: true,
        caughtErrorsIgnorePattern: '^ignore'
      }
    ],
    'arrow-parens': ['off', 'as-needed'],
    camelcase: 'off',
    'capitalized-comments': 'error',
    'consistent-return': 'off',
    'class-methods-use-this': 'off',
    'eol-last': 'off',
    eqeqeq: ['error', 'smart'],
    'id-blacklist': 'off',
    'id-match': 'error',
    'global-require': 'off',
    'linebreak-style': 'off',
    'new-parens': 'off',
    'newline-per-chained-call': 'off',
    'no-var': 'error',
    'no-bitwise': 'off',
    'no-eval': 'error',
    'no-empty': 'off',
    'no-plusplus': 'off',
    'no-console': 'off',
    'no-cond-assign': 'off',
    'no-new-wrappers': 'error',
    'no-param-reassign': 'off',
    'no-underscore-dangle': 'off',
    'no-restricted-syntax': 'off',
    'no-prototype-builtins': 'off',
    'no-duplicate-imports': 'error',
    'no-useless-constructor': 'off',
    'object-shorthand': 'error',
    'one-var': ['error', 'never'],
    'padding-line-between-statements': [
      'error',
      {
        blankLine: 'always',
        prev: '*',
        next: 'return'
      }
    ],
    'prefer-const': 'error',
    'prefer-template': 'error',
    'quote-props': 'off',
    radix: 'off',
    'space-before-function-paren': 'off',
    'spaced-comment': 'error',

    'import/order': 'error',
    'import/extensions': 'off',
    'import/no-unresolved': 'off',
    'import/no-extraneous-dependencies': 'off',
    'import/prefer-default-export': 'off',
    'import/no-dynamic-require': 'off',

    'react/jsx-key': 'error',
    'react/jsx-no-bind': 'error',
    'react/self-closing-comp': 'error',
    'react/state-in-constructor': 'off',
    'react/jsx-props-no-spreading': 'off',
    'react/no-did-update-set-state': 'off',
    'react/prefer-stateless-function': 'off',
    'react/destructuring-assignment': 'off',
    'react/jsx-one-expression-per-line': 'off',
    'react/jsx-boolean-value': ['error', 'always'],
    'react/jsx-filename-extension': [1, { extensions: ['.js', '.jsx', '.ts', '.tsx'] }],
    'react/jsx-no-bind': 'off',
    'react/no-unescaped-entities': 'off',
    'react/static-property-placement': 'off',
    'react/prop-types': 'off',
    'react/sort-comp': [
      'error',
      {
        order: [
          'static-variables',
          'static-methods',
          'instance-variables',
          'type-annotations',
          'lifecycle',
          'everything-else',
          '/^on.+$/',
          '/^handle.+$/',
          'rendering'
        ],
        groups: {
          rendering: ['/^render.+$/', 'render']
        }
      }
    ],

    'jsx-a11y/anchor-is-valid': 'off',
    'jsx-a11y/alt-text': 'off'
  }
}
