/**
 * @param {number} n
 * @return {number}
 */
function getMoneyAmount(n) {
  let dp = new Array(n + 1).fill().map((_) => new Array(n + 1).fill(0));

  function getMoneyAmountInRange(dp, start, end) {
    if (start >= end) return 0;
    if (dp[start][end] !== 0) return dp[start][end];

    let res = Number.MAX_VALUE;
    for (let i = start; i <= end; i++) {
      const amount =
        i +
        Math.max(
          getMoneyAmountInRange(dp, start, i - 1),
          getMoneyAmountInRange(dp, i + 1, end)
        );
      res = Math.min(res, amount);
    }

    dp[start][end] = res;
    return res;
  }

  return getMoneyAmountInRange(dp, 1, n);
}
