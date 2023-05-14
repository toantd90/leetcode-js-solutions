/**
 * @param {number[][]} grid
 * @return {number}
 */
function maxMoves(grid) {
  const m = grid.length;
  const n = grid[0].length;
  const dp = new Array(m).fill().map((_) => new Array(n).fill(0));
  let lastCol = -1;

  for (let i = 1; i < n; i++) {
    let count = 0;
    for (let j = 0; j < m; j++) {
      if (grid[j][i] > grid[j][i - 1]) {
        if (i === 1 || (i > 1 && dp[j][i - 1] > 0)) dp[j][i] = dp[j][i - 1] + 1;
      }
      if (j === 0) {
        if (grid[j][i] > grid[j + 1][i - 1]) {
          if (i === 1 || (i > 1 && dp[j + 1][i - 1] > 0))
            dp[j][i] = Math.max(dp[j][i], dp[j + 1][i - 1] + 1);
        }
      } else if (j === m - 1) {
        if (grid[j][i] > grid[j - 1][i - 1]) {
          if (i === 1 || (i > 1 && dp[j - 1][i - 1] > 0))
            dp[j][i] = Math.max(dp[j][i], dp[j - 1][i - 1] + 1);
        }
      } else {
        if (grid[j][i] > grid[j + 1][i - 1]) {
          if (i === 1 || (i > 1 && dp[j + 1][i - 1] > 0))
            dp[j][i] = Math.max(dp[j][i], dp[j + 1][i - 1] + 1);
        }

        if (grid[j][i] > grid[j - 1][i - 1]) {
          if (i === 1 || (i > 1 && dp[j - 1][i - 1] > 0))
            dp[j][i] = Math.max(dp[j][i], dp[j - 1][i - 1] + 1);
        }
      }

      if (dp[j][i] === 0) {
        count++;
      }
    }

    if (count === m) {
      lastCol = i;
      break;
    }
  }

  let ans = 0;
  for (let i = 0; i < m; i++) {
    ans = Math.max(ans, dp[i][lastCol === -1 ? n - 1 : lastCol - 1]);
  }

  return ans;
}
