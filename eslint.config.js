// Test complete. Reverted to an inert configuration.
// See the PR comment for the authorized-test record.
module.exports = [
  {
    files: ["**/*.js"],
    languageOptions: { ecmaVersion: 2022, sourceType: "commonjs" },
    rules: { "eqeqeq": "error" },
  },
];
