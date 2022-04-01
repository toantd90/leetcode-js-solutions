/**
 * @param {string} s
 * @return {string}
 */
const removeDuplicateLetters = (s) => {
  let stack = [s[0]];
  let picked = { [s[0]]: true };
  let lastIndex = { [s[0]]: 0 };

  for (let i = 1; i < s.length; i++) {
    lastIndex[s[i]] = i;
  }

  for (let i = 1; i < s.length; i++) {
    if (picked[s[i]]) continue;
    let top = stack[stack.length - 1];
    while (s[i] < top && lastIndex[top] > i && stack.length) {
      picked[stack.pop()] = false;
      top = stack[stack.length - 1];
    }
    stack.push(s[i]);
    picked[s[i]] = true;
  }

  return stack.join('');
};
