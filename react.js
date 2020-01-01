module.exports = {
  extends: [
    "./index.js",
    "plugin:react/recommended",
    "plugin:jsx-a11y/recommended"
  ],
  plugins: ["jsx-a11y", "react-hooks"],
  settings: {
    react: {
      version: "detect"
    }
  },
  parserOptions: {
    sourceType: "module",
    ecmaFeatures: {
      jsx: true
    }
  },
  env: {
    browser: true,
    node: true,
    es6: true
  },
  rules: {
    "react/no-unescaped-entities": ["error", { forbid: [">", '"', "}"] }],
    "react-hooks/rules-of-hooks": "error",
    "react-hooks/exhaustive-deps": "error"
  }
};
