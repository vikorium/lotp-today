// second canary - added by this PR, so every line is inside the diff
var unusedInPr = 1;

function canaryTwo(a, b) {
  if (a == b) {          // eqeqeq   -> ON in PR config, off on main
    debugger;            // no-debugger -> off in PR config, ON on main
  }
  return eval("2 + 2");  // no-eval  -> off in PR config, ON on main
}

module.exports = { canaryTwo };
