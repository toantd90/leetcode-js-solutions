/**
 * @param {string} s
 * @return {string}
 */
const removeDuplicateLetters = (s) => {
    let stack = [];

    
    for(let i = 0; i < s.length; i++) {
        if(stack.indexOf(s[i]) > -1) continue;
     
        while(stack.length > 0 && stack[stack.length-1] > s[i] && s.indexOf(stack[stack.length-1], i) > i) {
            stack.pop();
        }
        stack.push(s[i]);
    
    }
    return stack.join('')
};
