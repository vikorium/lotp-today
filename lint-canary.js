// canary file for linter configuration testing
var unusedVariable = 1;

function canary(a, b) {
if (a == b) {           // eqeqeq
  debugger;             // no-debugger
}
return eval("1 + 1");   // no-eval
}

module.exports = { canary };
