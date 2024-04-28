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
                const result = 1 / stack.pop() * stack.pop();

                if (result < 0) {
                    stack.push(Math.ceil(result));
                } else {
                    stack.push(Math.floor(result));
                }
            } else {
                stack.push(stack.pop() * stack.pop());
            }
        }
    }

    return stack[0];
};