import js from '@eslint/js';
import globals from 'globals';
import react from 'eslint-plugin-react';
import reactHooks from 'eslint-plugin-react-hooks';
import reactRefresh from 'eslint-plugin-react-refresh';

export default [
  { ignores: ['dist'] }, // Ignore the dist folder
  {
    files: ['**/*.{js,jsx}'], // Apply to all JS and JSX files
    languageOptions: {
      ecmaVersion: 2022, // Updated to ECMAScript 2022
      globals: {
        ...globals.browser, // Browser globals (e.g., window, document)
        ...globals.node, // Node.js globals (if needed)
      },
      parserOptions: {
        ecmaVersion: 'latest', // Use the latest ECMAScript version
        ecmaFeatures: { jsx: true }, // Enable JSX support
        sourceType: 'module', // Use ES modules
      },
    },
    settings: {
      react: {
        version: 'detect', // Automatically detect React version
      },
    },
    plugins: {
      react, // React plugin
      'react-hooks': reactHooks, // React Hooks plugin
      'react-refresh': reactRefresh, // React Refresh plugin
    },
    rules: {
      ...js.configs.recommended.rules, // ESLint recommended rules
      ...react.configs.recommended.rules, // React recommended rules
      ...react.configs['jsx-runtime'].rules, // JSX runtime rules
      ...reactHooks.configs.recommended.rules, // React Hooks recommended rules
      'react/jsx-no-target-blank': 'off', // Disable this rule (optional)
      'react-refresh/only-export-components': [
        'warn',
        { allowConstantExport: true }, // Allow constant exports
      ],
      'react/prop-types': 'off', // Disable prop-types (optional, if not using prop-types)
      'no-unused-vars': 'warn', // Warn about unused variables
      'react/jsx-key': 'error', // Enforce key prop in JSX lists
    },
  },
];