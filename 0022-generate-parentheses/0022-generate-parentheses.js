function backtrack(open, close, currentCombination, combinations) {
  if (open === 0) {
    combinations.push(currentCombination.concat(')'.repeat(close)));
    return;
  }

  backtrack(open - 1, close, currentCombination + '(', combinations);

  if (open !== close) {
    backtrack(open, close - 1, currentCombination + ')', combinations);
  }
}

/**
 * @param {number} n
 * @return {string[]}
 */
function generateParenthesis(n) {
  let combinations = [];
  backtrack(n - 1, n, '(', combinations);

  return combinations;
}
