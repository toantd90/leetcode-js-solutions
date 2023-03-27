/**
 * @param {number[][]} grid
 * @return {number}
 */
function minPathSum(grid) {
  const m = grid.length;
  const n = grid[0].length;

  for (let i = 1; i < n; i++) {
    grid[0][i] += grid[0][i - 1];
  }

  for (let i = 1; i < m; i++) {
    for (let j = 0; j < n; j++) {
      const currentValue = grid[i][j];
      grid[i][j] += grid[i - 1][j];

      if (j > 0) {
        grid[i][j] = Math.min(grid[i][j], currentValue + grid[i][j - 1]);
      }
    }
  }

  return grid[m - 1][n - 1];
}
