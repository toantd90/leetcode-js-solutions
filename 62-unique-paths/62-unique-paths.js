/**
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
function uniquePaths (m, n) {
  let dp = new Array(m).fill().map(() => new Array(n).fill(1))
  
  for (let i = 1; i < m; i++) {
    for (let j = 1; j < n; j++) {
      dp[i][j] = dp[i][j - 1] + dp[i - 1][j]
    }
  }
  
  return dp[m - 1][n - 1]
};