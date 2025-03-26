module.exports = {
  extends: [
    'next/core-web-vitals',
    'plugin:unicorn/recommended',
    'plugin:import/recommended',
    'plugin:playwright/recommended',
    'plugin:prettier/recommended',
  ],
  plugins: ['simple-import-sort', 'unicorn'],
  settings: {
    'import/resolver': {
      node: {
        extensions: ['.js', '.jsx', '.ts', '.tsx'],
        moduleDirectory: ['node_modules', 'src/'],
      },
    },
  },
  rules: {
    'simple-import-sort/exports': 'error',
    'simple-import-sort/imports': 'error',
    'unicorn/no-array-callback-reference': 'off',
    'unicorn/no-array-for-each': 'off',
    'unicorn/no-array-reduce': 'off',
    'import/no-unresolved': [
      'error',
      {
        ignore: ['^server-only$'],
      },
    ],
    'unicorn/prevent-abbreviations': [
      'error',
      {
        allowList: {
          e2e: true,
        },
        replacements: {
          props: false,
          ref: false,
          params: false,
        },
      },
    ],
  },
  overrides: [
    {
      files: ['**/*.js'],
      rules: {
        'unicorn/prefer-module': 'off',
      },
    },
    {
      files: ['**/*.tsx'],
      rules: {
        'import/export': 'off',
      },
    },
  ],
}
