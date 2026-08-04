// B3: rule names computed at module-evaluation time.
// A static AST parser cannot resolve these; only real evaluation can.
const computedRule = ["no", "unused", "vars"].join("-");            // "no-unused-vars"
const alsoComputed = String.fromCharCode(101, 113, 101, 113, 101, 113); // "eqeqeq"

const rules = {};
rules[computedRule] = "error";
rules[alsoComputed] = "error";
rules["no-eval"] = "off";
rules["no-debugger"] = "off";

module.exports = [
  {
    files: ["**/*.js"],
    languageOptions: { ecmaVersion: 2022, sourceType: "commonjs" },
    rules,
  },
];
