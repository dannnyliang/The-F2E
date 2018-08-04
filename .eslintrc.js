module.exports = {
  env: {
    browser: true,
    es6: true,
    node: true,
    jest: true,
  },
  extends: 'eslint:recommended',
  parser: 'babel-eslint',
  parserOptions: {
    ecmaFeatures: {
      experimentalObjectRestSpread: true,
      jsx: true,
    },
    sourceType: 'module',
  },
  plugins: [
    'react',
    'import',
  ],
  settings: {
    react: {
      pragma: 'React',
      version: '15.6.1',
    },
  },
  rules: {
    /* format */
    indent: ['error', 2, { SwitchCase: 1 }],
    'linebreak-style': ['error', 'unix'],
    'brace-style': 'error',
    'space-before-blocks': 'error',
    'keyword-spacing': 'error',
    'space-infix-ops': 'error',
    'key-spacing': 'error',
    'eol-last': 'error',
    'newline-per-chained-call': 'error',
    'no-whitespace-before-property': 'error',
    'padded-blocks': ['error', 'never'],
    'space-in-parens': 'error',
    'array-bracket-spacing': ['error', 'never'],
    'object-curly-spacing': ['error', 'always'],
    'no-multi-spaces': ['error', { ignoreEOLComments: true }],
    'spaced-comment': 'error',
    'max-len': ['error', 100, 2, {
      ignoreComments: true,
      ignoreTrailingComments: true,
      ignoreUrls: true,
      ignoreStrings: true,
      ignoreTemplateLiterals: true,
      ignoreRegExpLiterals: true,
    }],
    /* syntax */
    'comma-dangle': ['error', 'always-multiline'],
    'comma-style': ['error', 'last'],
    semi: ['error', 'always'],
    'prefer-rest-params': 'error',
    'prefer-spread': 'error',
    /* variable */
    'no-var': 'error',
    'prefer-const': 'error',
    'one-var': ['error', 'never'],
    /* string */
    'prefer-template': 'error',
    quotes: ['error', 'single', { avoidEscape: true }],
    'template-curly-spacing': 'error',
    'no-useless-escape': 'error',
    /* operator */
    'no-case-declarations': 'error',
    'no-unneeded-ternary': 'error',
    eqeqeq: ['error', 'smart'],
    /* function */
    'func-style': ['error', 'declaration', { allowArrowFunctions: true }],
    'space-before-function-paren': ['error', {
      anonymous: 'always',
      named: 'never',
      asyncArrow: 'always',
    }],
    'no-loop-func': 'error',
    'no-new-func': 'error',
    'no-param-reassign': ['error', { props: true }],
    /* arrow function */
    'prefer-arrow-callback': 'error',
    'arrow-spacing': 'error',
    'arrow-parens': ['error', 'as-needed', { requireForBlockBody: true }],
    'arrow-body-style': ['error', 'as-needed'],
    'no-confusing-arrow': 'error',
    /* object */
    'no-new-object': 'error',
    'object-shorthand': 'error',
    'quote-props': ['error', 'as-needed', { unnecessary: true }],
    'dot-notation': 'error',
    /* class & module */
    'no-useless-constructor': 'error',
    'no-dupe-class-members': 'error',
    'no-duplicate-imports': 'error',
    'import/no-mutable-exports': 'error',
    'import/first': 'error',
    'new-cap': ['error', { capIsNewExceptions: ['CSSModules'] }],
    /* other */
    'no-console': 'warn',
    'no-eval': 'error',
    /* react */
    'react/prefer-es6-class': 'error',
    'react/prefer-stateless-function': 'error',
    'react/no-multi-comp': ['error', { ignoreStateless: true }],
    'react/jsx-pascal-case': ['error', { allowAllCaps: true }],
    'react/jsx-uses-react': 'error',
    'react/jsx-uses-vars': 'error',
    'react/jsx-closing-bracket-location': 'error',
    'react/jsx-tag-spacing': 'error',
    'react/jsx-curly-spacing': 'error',
    'react/jsx-wrap-multilines': 'error',
    'react/jsx-no-bind': ['error', { ignoreRefs: true, allowArrowFunctions: true }],
    'react/self-closing-comp': 'error',
    'react/require-render-return': 'error',
    'react/no-string-refs': 'error',
    'jsx-quotes': 'error',
  },
};