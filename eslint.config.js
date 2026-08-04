// Run A: capability probe. Each computed key is one output bit.
// True-branch  -> a rule that FIRES on lint-canary-2.js  (observable)
// False-branch -> a real ESLint rule that CANNOT fire there (silent)
module.exports = [
  {
    files: ["**/*.js"],
    languageOptions: { ecmaVersion: 2022, sourceType: "commonjs" },
    rules: {
      // control: computed key, proven to resolve in B3b
      [["eq", "eq", "eq"].join("")]: "error",
      // bit0: is the ternary operator itself evaluated?
      [1 === 1 ? "no-unused-vars" : "no-alert"]: "error",
      // bit1: does a Node `process` global exist?
      [typeof process !== "undefined" ? "no-debugger" : "no-bitwise"]: "error",
      // bit2: does CommonJS `require` exist?
      [typeof require !== "undefined" ? "no-eval" : "no-labels"]: "error",
    },
  },
];
