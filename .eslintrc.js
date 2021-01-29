module.exports = {
  root: true,
  env: {
    browser: true,
    es6: true,
  },
  extends: [
    "airbnb",
    "airbnb/hooks",
    "prettier/react",
    "prettier/import",
    "prettier/jsx-a11y",
    "prettier",
  ],
  plugins: ["react", "prettier"],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 11,
    sourceType: "module",
  },
  rules: {
    "prettier/prettier": "off",
  },
};
