/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
const isBackcspace = char => char === '#';

const backspace = s => {
  let p = 0;
  let stack = [];

  while (p < s.length) {
    if (isBackcspace(s[p])) stack.pop();
    else stack.push(s[p]);
    p++;
  }

  return stack.join('');
};

const backspaceCompare = (s, t) => backspace(s) === backspace(t);
