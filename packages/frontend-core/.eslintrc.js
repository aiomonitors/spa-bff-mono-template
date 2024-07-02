/** @type {import("eslint").Linter.Config} */
module.exports = {
  extends: ["@aiomonitors-spa/eslint-config/react.js"],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    project: true,
  },
  env: {
    jest: true,
  },
  ignorePatterns: ["tsup.config.ts", ".eslintrc.cjs", "vite.config.*"],
};
