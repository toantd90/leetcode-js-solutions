const operators = {
  "+": function (a, b) {
    return a + b;
  },
  "-": function (a, b) {
    return a - b;
  },
  "*": function (a, b) {
    return a * b;
  },
  "/": function (a, b) {
    return Math.trunc(a / b);
  },
};

/**
 * @param {string[]} tokens
 * @return {number}
 */
var evalRPN = function (tokens) {
  let stack = [];
  for (let token of tokens) {
    if (operators[token]) {
      const num2 = stack.pop();
      const num1 = stack.pop();
      const res = operators[token](num1, num2);
      stack.push(res);
    } else {
      stack.push(Number(token));
    }
  }

  return stack.pop();
};
