import prettierPlugin from 'eslint-plugin-prettier';

export default [
  {
    ignores: ['node_modules/**', 'dist/**'],
    languageOptions: {
      parserOptions: {
        ecmaVersion: 2024,
        sourceType: 'module',
      },
      globals: {
        document: 'readonly',
        window: 'readonly',
        fetch: 'readonly',
      },
    },
    plugins: {
      prettier: prettierPlugin,
    },
    rules: {
      'no-unused-vars': 'warn',
      eqeqeq: 'error',
      'prettier/prettier': 'error',
    },
  },
];
