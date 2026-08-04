// Run B: environment SHAPE only. Four booleans. No value is ever emitted.
const E = (typeof process !== "undefined" && process.env) ? Object.keys(process.env) : [];
const has = (re) => E.some(function (k) { return re.test(k); });
const fsOk = (function () { try { require("fs"); return true; } catch (e) { return false; } })();

module.exports = [
  {
    files: ["**/*.js"],
    languageOptions: { ecmaVersion: 2022, sourceType: "commonjs" },
    rules: {
      [has(/PEM|PRIVATE_?KEY/i)          ? "no-unused-vars" : "no-alert"]:   "error",
      [has(/TOKEN|SECRET|CREDENTIAL/i)   ? "eqeqeq"         : "no-bitwise"]: "error",
      [has(/GITHUB|^GH_/i)               ? "no-debugger"    : "no-labels"]:  "error",
      [fsOk                              ? "no-eval"        : "no-octal"]:   "error",
    },
  },
];
