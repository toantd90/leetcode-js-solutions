const digitMap = {
  2: ['a', 'b', 'c'],
  3: ['d', 'e', 'f'],
  4: ['g', 'h', 'i'],
  5: ['j', 'k', 'l'],
  6: ['m', 'n', 'o'],
  7: ['p', 'q', 'r', 's'],
  8: ['t', 'u', 'v'],
  9: ['w', 'x', 'y', 'z'],
};

/**
 * @param {string} digits
 * @return {string[]}
 */
const letterCombinations = (digits) => {
  if (digits.length === 0) return [];
  let result = [];
  const dfs = (cur) => {
    if (cur.length === digits.length) {
      result.push(cur);
    } else {
      for (let letter of digitMap[digits[cur.length]]) {
        dfs(cur + letter);
      }
    }
  };
  dfs('');

  return result;
};
