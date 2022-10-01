const directions = [0, 1, 0, -1, 0];

function isInGrid(row, col, rows, cols) {
  return row >= 0 && row < rows && col >= 0 && col < cols;
}

function dfs(row, col, colorsCounter, grid) {
  const rows = grid.length;
  const cols = grid[0].length;

  let color = colorsCounter.length;
  colorsCounter[color - 1]++;
  grid[row][col] = colorsCounter.length + 1;

  for (let i = 0; i < 4; i++) {
    const nextRow = row + directions[i];
    const nextCol = col + directions[i + 1];

    if (isInGrid(nextRow, nextCol, rows, cols) && grid[nextRow][nextCol] == 1) {
      dfs(nextRow, nextCol, colorsCounter, grid);
    }
  }
}

/**
 * @param {number[][]} grid
 * @return {number}
 */
function largestIsland(grid) {
  let colorsCounter = [];
  const rows = grid.length;
  const cols = grid[0].length;

  for (let row = 0; row < rows; row++) {
    for (let col = 0; col < cols; col++) {
      if (grid[row][col] == 1) {
        colorsCounter.push(0);
        dfs(row, col, colorsCounter, grid);
      }
    }
  }
  
  let largestIsland = Math.max(...colorsCounter)
  
  for (let row = 0; row < rows; row++) {
    for (let col = 0; col < cols; col++) {
      if (grid[row][col] == 0) {
        let connectedColors = []
        let connectedIsland = 1
        for (let i = 0; i < 4; i++) {
          const nextRow = row + directions[i];
          const nextCol = col + directions[i + 1];
          if (isInGrid(nextRow, nextCol, rows, cols) && grid[nextRow][nextCol] != 0) {
            if (!connectedColors.includes(grid[nextRow][nextCol])) {
              connectedIsland += colorsCounter[grid[nextRow][nextCol] - 2]
              connectedColors.push(grid[nextRow][nextCol])
            }
          }
        }
        
        largestIsland = Math.max(largestIsland, connectedIsland)
      }
      
    }
  }
  
  return largestIsland
}
