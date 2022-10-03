/**
 * @param {number[][]} grid
 * @return {number}
 */
function maxSum(grid) {
  const rows = grid.length
  const cols = grid[0].length
  
  for (let row = 0; row < rows; row++) {
    for (let col = 1; col < cols; col++) {
      grid[row][col] += grid[row][col - 1]
    }
  }
  
  let maxSum = 0
  
  for (let row = 0; row < rows - 2; row++) {
    for (let col = 0; col < cols - 2; col++) {
      let curSum = grid[row][col + 2] - (grid[row][col - 1] || 0) + grid[row + 1][col + 1] - grid[row + 1][col] + grid[row + 2][col + 2] - (grid[row + 2][col - 1] || 0)
      
      maxSum = Math.max(maxSum, curSum)
    }
  }
  
  return maxSum
};