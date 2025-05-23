module.exports = {
  bracketSameLine: false,
  bracketSpacing: true,
  embeddedLanguageFormatting: 'auto',
  experimentalTernaries: false,
  htmlWhitespaceSensitivity: 'css',
  insertPragma: false,
  jsxSingleQuote: true,
  printWidth: 80,
  proseWrap: 'preserve',
  quoteProps: 'as-needed',
  requirePragma: false,
  semi: true,
  singleAttributePerLine: false,
  tabWidth: 2,
  trailingComma: 'all',
  useTabs: false,
  vueIndentScriptAndStyle: false,

  plugins: [
    'prettier-plugin-tailwindcss',
    '@trivago/prettier-plugin-sort-imports',
  ],

  tailwindAttributes: ['classProp', 'className'],

  importOrder: [
    '^react$',
    '^react-dom$',
    '^react/(.*)$',
    '^react-dom/(.*)$',
    '^next$',
    '^next/(.*)$',
    '<THIRD_PARTY_MODULES>',
    '^@/components/(.*)$',
    '^@/lib/(.*)$',
    '^@/hooks/(.*)$',
    '^@/utils/(.*)$',
    '^@/types/(.*)$',
    '^@/services/(.*)$',
    '^@/styles/(.*)$',
    '^@/(.*)$',
    '^[./]',
    '^.+\\.?(css|scss|sass)$',
  ],
  importOrderSeparation: true,
  importOrderSortSpecifiers: true,
  importOrderGroupNamespaceSpecifiers: true,
};
