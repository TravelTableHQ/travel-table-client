import type { Linter } from "eslint";

const config: Linter.Config = {
  extends: ["eslint:recommended", "@typescript-eslint/recommended", "prettier"],
  parser: "@typescript-eslint/parser",
  plugins: ["@typescript-eslint"],
  root: true,
  env: {
    node: true,
    es6: true,
  },
  ignorePatterns: ["dist/", "node_modules/"],
};

export default config;
