/**
 * @param {string} s
 * @return {number}
 */
function maxDepth(s) {
  let stack = [];
  let max = 0;

  for (let char of s) {
    if (char === "(") {
      stack.push(char);
      max = Math.max(max, stack.length);
    }

    if (char === ")") {
      stack.pop();
    }
  }

  return max;
}
