/** @type {import("eslint").Linter.Config} */
const path = require('path');
module.exports = {
  extends: ["@aiomonitors-spa/eslint-config/react.js"],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    project: [path.join(__dirname, 'tsconfig.app.json')],
  },
  root: true,
  env: { browser: true, es2020: true },
  env: {
    jest: true,
  },
  ignorePatterns: [
    "tsup.config.ts", 
    ".eslintrc.cjs", 
    "vite.config.*",
    "vite-env.d.ts"
  ],
};
