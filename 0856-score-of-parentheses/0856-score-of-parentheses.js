/**
 * @param {string} s
 * @return {number}
 */
var scoreOfParentheses = function (s) {
    let stack = [];

    for (let i = 0; i < s.length; i++) {
        if (s[i] === '(') {
            stack.push(s[i]);
        } else {
            let currentScore = 0;

            while (stack[stack.length - 1] !== '(') {
                currentScore += stack.pop();
            }

            stack.pop();

            if (currentScore === 0) {
                stack.push(1)
            } else {
                stack.push(2 * currentScore);
            }
        }
    }

    return stack.reduce((acc, cur) => acc + cur);
};