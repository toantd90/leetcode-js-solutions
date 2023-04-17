/**
 * @param {number[][]} grid
 * @return {number[]}
 */
function findColumnWidth(grid) {
  const m = grid.length
  const n = grid[0].length
  let ans = []

  for (let i = 0; i < n; i++) {
    let maxLength = 0

    for (let j = 0; j < m; j++) {
      maxLength = Math.max(maxLength, grid[j][i].toString().length)
    }

    ans.push(maxLength)
  }

  return ans
};