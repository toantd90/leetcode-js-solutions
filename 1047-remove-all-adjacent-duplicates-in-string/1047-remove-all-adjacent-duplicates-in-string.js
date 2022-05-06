/**
 * @param {string} s
 * @return {string}
 */
const removeDuplicates = s => {
    let stack = []
    
    for (let c of s) {
        if (!stack.length || stack[stack.length - 1] !== c) {
            stack.push(c)
        } else {
            stack.pop()
        }
    }
    
    return stack.join('')
};