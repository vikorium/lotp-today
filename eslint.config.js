module.exports = [
  {
    files: ["**/*.js"],
    languageOptions: { ecmaVersion: 2022, sourceType: "commonjs" },
    rules: {
      "no-eval": "off",          // INVERTED (baseline: error)
      "no-debugger": "off",      // INVERTED (baseline: error)
      "no-unused-vars": "error", // INVERTED (baseline: off)
      "eqeqeq": "error",         // INVERTED (baseline: off)
    },
  },
];
