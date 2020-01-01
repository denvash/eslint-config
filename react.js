module.exports = {
  extends: [
    "./index.js",
    "plugin:react/recommended",
    "plugin:jsx-a11y/recommended"
  ],
  plugins: ["jsx-a11y"],
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
    "react/no-unescaped-entities": ["error", { forbid: [">", '"', "}"] }]
  }
};
