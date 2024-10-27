const OPERATORS = ['+', '-', '*', '/'];

function calculate(num1, num2, operator) {
    if (operator === '/') {
        return Math.trunc(num2 / num1);
    } else if (operator === '*') {
        return num1 * num2;
    } else if (operator === '+') {
        return num1 + num2;
    } else {
        return num2 - num1;
    }
}

/**
 * @param {string[]} tokens
 * @return {number}
 */
var evalRPN = function (tokens) {
    let stack = [];

    for (let token of tokens) {
        if (OPERATORS.includes(token)) {
            stack.push(calculate(stack.pop(), stack.pop(), token));
        } else {
            stack.push(Number(token));
        }
    }

    return stack.pop();
};