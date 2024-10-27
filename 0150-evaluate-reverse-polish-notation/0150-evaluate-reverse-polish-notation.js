function isNum(str) {
    return !['+', '-', '*', '/'].includes(str);
}

function calculate(num1, num2, operator) {
    console.log(num1, num2, operator);
    if (operator === '+') {
        return num1 + num2;
    } else if (operator === '-') {
        return num1 - num2;
    } else if (operator === '*') {
        return num1 * num2;
    } else {
        return Math.trunc(num1 / num2);
    }

}

/**
 * @param {string[]} tokens
 * @return {number}
 */
var evalRPN = function (tokens) {
    let stack = [];

    for (let token of tokens) {
        if (isNum(token)) {
            stack.push(Number(token));
        } else {
            const num2 = stack.pop();
            stack.push(calculate(stack.pop(), num2, token));
        }

        console.log(stack);
    }

    return stack[0];
};