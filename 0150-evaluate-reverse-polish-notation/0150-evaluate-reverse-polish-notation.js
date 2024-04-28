/**
 * @param {string[]} tokens
 * @return {number}
 */
function evalRPN(tokens) {
    let stack = []

    for (let token of tokens) {
        if (!isNaN(token)) {
            stack.push(Number(token))
        } else {
            console.log(stack)
            if (token === '+') {
                stack.push(stack.pop() + stack.pop());
            } else if (token === '-') {
                stack.push(- stack.pop() + stack.pop());
            } else if (token === '/') {
                stack.push(Math.trunc(1 / stack.pop() * stack.pop()));
            } else {
                stack.push(stack.pop() * stack.pop());
            }
        }
    }

    return stack[0];
};