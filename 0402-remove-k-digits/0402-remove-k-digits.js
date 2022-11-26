/**
 * @param {string} num
 * @param {number} k
 * @return {string}
 */
function removeKdigits (num, k) {
  let stack = [];
  let removed = 0;
  for (let n of num) {
    while (stack.length && n < stack[stack.length - 1] && removed < k) {
      stack.pop();
      removed += 1;
    }
    stack.push(n);
  }

  // remove all remaining large numbers
  while (removed < k) {
    stack.pop();
    removed += 1;
  }

  let firstZeroIdx = 0;
  // remove all beginning zeroes
  while (stack.length && stack[firstZeroIdx] === '0') {
    firstZeroIdx++;
  }

  stack = stack.slice(firstZeroIdx);

  return stack.length ? stack.join('') : '0';
};
