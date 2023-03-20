function calculate(s, start, end, memo) {
  if (start > end) {
    return 0;
  }
  if (memo[start][end] !== 0) return memo[start][end];

  if (s[start] === s[end]) {
    const between = calculate(s, start + 1, end - 1, memo);

    if (between === end - start - 1) {
      memo[start][end] = between + 2;
    } else {
      memo[start][end] = Math.max(
        calculate(s, start + 1, end, memo),
        calculate(s, start, end - 1, memo)
      );  
    }
  } else {
    memo[start][end] = Math.max(
      calculate(s, start + 1, end, memo),
      calculate(s, start, end - 1, memo)
    );
  }

  return memo[start][end];
}

/**
 * @param {string} s
 * @return {string}
 */
function longestPalindrome(s) {
  const length = s.length;
  let memo = new Array(length).fill().map((_) => new Array(length).fill(0));
  
  for (let i = 0; i < length; i++) {
    memo[i][i] = 1;
  }
  
  const res = calculate(s, 0, length - 1, memo);

  for (let i = 0; i < length; i++) {
    for (let j = 0; j < length; j++) {
      if (memo[i][j] == res) {
        return s.slice(j - res + 1, j + 1);
      }
    }
  }
}
