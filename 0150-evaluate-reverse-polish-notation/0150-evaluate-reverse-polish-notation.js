/**
 * @param {string[]} tokens
 * @return {number}
 */
function evalRPN(tokens) {
  let stack = [];
  for (let i = 0; i < tokens.length; i++) {
    if (!isNaN(tokens[i])) {
      stack.push(tokens[i]);
    } else {
      const secondNumber = Number(stack.pop());
      const firstNumber = Number(stack.pop());

      if (tokens[i] === '+') {
        stack.push(firstNumber + secondNumber);
      } else if (tokens[i] === '-') {
        stack.push(firstNumber - secondNumber);
      } else if (tokens[i] === '*') {
        stack.push(firstNumber * secondNumber);
      } else {
        const result = firstNumber / secondNumber;

        if (result < 0) stack.push(Math.ceil(result));
        else stack.push(Math.floor(result));
      }
    }
  }

  return stack.pop();
}
