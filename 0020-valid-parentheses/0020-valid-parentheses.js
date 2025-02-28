const closeBracketsMap = {
    "}": "{",
    "]": "[",
    ")": "(",
}

/**
 * @param {string} s
 * @return {boolean}
 */
function isValid(s) {
    let stack = [];
    for (let c of s) {
        if (closeBracketsMap[c]) {
            const last = stack.pop();

            if (closeBracketsMap[c] !== last) {
                return false;
            }
        } else {
            stack.push(c);
        }
    }

    return stack.length === 0;
};