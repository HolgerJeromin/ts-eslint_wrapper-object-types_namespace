/** @type {(import('eslint').Linter.Config)} */
module.exports = {
  root: true,
  env: {
    es2021: true,
  },
  parser: "@typescript-eslint/parser",
  parserOptions: {
    project: true,
  },
  plugins: ["@typescript-eslint"],
  rules: {
    "no-compare-neg-zero": "error",
    "@typescript-eslint/no-wrapper-object-types": "error",
  },
};
