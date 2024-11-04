/**
 * @param {string} s
 * @param {number} k
 * @return {string}
 */
const removeDuplicates = (s, k) => {
  let stack = [];
  let counts = [];
  for (let c of s) {
    if (!stack.length || stack[stack.length - 1] !== c) {
      stack.push(c);
      counts.push(1);
    } else {
      if (counts[counts.length - 1] === k - 1) {
        counts.pop();
        stack.length = stack.length - k + 1;
      } else {
        counts[counts.length - 1]++;
        stack.push(c);
      }
    }
  }

  return stack.join("");
};
