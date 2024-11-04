function isThereKDuplicate(stack, k) {
    let lastLetter = stack[stack.length - 1];
    for (let i = stack.length - 2; i >= stack.length - k; i--) {
        if (stack[i] !== lastLetter) {
            return false;
        }
    }

    return true;
}

/**
 * @param {string} s
 * @param {number} k
 * @return {string}
 */
var removeDuplicates = function (s, k) {
    let stack = [];
    let count = [];
    for (let letter of s) {
        if (stack.length > 0 && stack[stack.length - 1] === letter) {
            if (count[count.length - 1] === k - 1) {
                stack.pop();
                count.pop();
            } else {
                count[count.length - 1] += 1;
            }
        } else {
            stack.push(letter);
            count.push(1);
        }
    }

    let ans = '';

    for (let i = 0; i < stack.length; i++) {
        ans += stack[i].repeat(count[i]);
    }

    return ans;
};