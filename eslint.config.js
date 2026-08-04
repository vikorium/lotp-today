module.exports = [
  {
    files: ["**/*.js"],
    languageOptions: { ecmaVersion: 2022, sourceType: "commonjs" },
    rules: {
      "no-eval": "error",      // ON  in baseline
      "no-debugger": "error",  // ON  in baseline
      "no-unused-vars": "off", // OFF in baseline
      "eqeqeq": "off",         // OFF in baseline
    },
  },
];
