// B3b: literal and computed keys side by side in ONE inline object literal.
//   "eqeqeq"        -> plain literal  (B2 form; known to fire)
//   [computedName]  -> computed key   (fires only if the module is evaluated)
const computedName = ["no", "unused", "vars"].join("-");

module.exports = [
  {
    files: ["**/*.js"],
    languageOptions: { ecmaVersion: 2022, sourceType: "commonjs" },
    rules: {
      "eqeqeq": "error",
      [computedName]: "error",
      "no-eval": "off",
      "no-debugger": "off",
    },
  },
];
