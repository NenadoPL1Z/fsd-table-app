module.exports = {
  root: true,
  env: {
    browser: true,
    es2020: true
  },
      extends: [
    "eslint:recommended",
    "plugin:react/recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:react-hooks/recommended",
    "plugin:prettier/recommended",
    "prettier",
  ],
  ignorePatterns: ["dist", ".eslintrc.js", "postcss.config.js"],
  parser: "@typescript-eslint/parser",
  plugins: ["react-refresh"],
  rules: {
    "prettier/prettier": "error",
    "no-unused-vars": "off",
    "no-console": "warn",
    "react-hooks/exhaustive-deps": "off",
    "@typescript-eslint/no-unused-vars": "error",
    "@typescript-eslint/no-explicit-any": "error",
    "react/react-in-jsx-scope": "off",
    "react-refresh/only-export-components": [
      "warn",
      { allowConstantExport: true },
    ],
  },
}
