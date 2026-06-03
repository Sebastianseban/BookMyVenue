import js from '@eslint/js';
import { fixupPluginRules } from '@eslint/compat';
import tseslint from 'typescript-eslint';
import importPlugin from 'eslint-plugin-import';
import unusedImports from 'eslint-plugin-unused-imports';
import prettier from 'eslint-config-prettier';

export default [
  {
    ignores: [
      'node_modules/**',
      'dist/**',
      'build/**',
      'coverage/**',
      '.cache/**',
      '.tmp/**',
      'logs/**',
      '*.log',
      'src/generated/**',
      'prisma/generated/**',
    ],
  },

  {
    ...js.configs.recommended,
    files: ['**/*.{js,mjs,cjs}'],
  },
  ...tseslint.configs.recommendedTypeChecked.map((config) => ({
    ...config,
    files: ['**/*.{ts,mts,cts}'],
  })),
  prettier,

  {
    files: ['**/*.{ts,mts,cts}'],
    languageOptions: {
      parserOptions: {
        projectService: {
          allowDefaultProject: ['prisma.config.ts', 'prisma/seed.ts'],
        },
        tsconfigRootDir: import.meta.dirname,
      },
    },
    plugins: {
      import: fixupPluginRules(importPlugin),
      'unused-imports': unusedImports,
    },
    rules: {
      '@typescript-eslint/no-explicit-any': 'warn',

      '@typescript-eslint/no-unused-vars': [
        'warn',
        {
          argsIgnorePattern: '^_',
          caughtErrorsIgnorePattern: '^_',
          varsIgnorePattern: '^_',
          ignoreRestSiblings: true,
        },
      ],

      'unused-imports/no-unused-imports': 'error',
      'unused-imports/no-unused-vars': [
        'warn',
        {
          args: 'after-used',
          argsIgnorePattern: '^_',
          varsIgnorePattern: '^_',
        },
      ],

      'import/order': [
        'warn',
        {
          groups: ['builtin', 'external', 'internal', 'parent', 'sibling', 'index'],
          'newlines-between': 'always',
          alphabetize: {
            order: 'asc',
            caseInsensitive: true,
          },
        },
      ],

      'no-console': 'off',
    },
  },
];
