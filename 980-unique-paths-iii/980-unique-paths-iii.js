function isInGrid(row, col, rows, cols) {
  return row >= 0 && row < rows && col >= 0 && col < cols;
}

/**
 * @param {number[][]} grid
 * @return {number}
 */
function uniquePathsIII(grid) {
  let paths = 0;
  const rows = grid.length;
  const cols = grid[0].length;
  let startingSquare;

  let obstacles = 0;
  for (let row = 0; row < rows; row++) {
    for (let col = 0; col < cols; col++) {
      if (grid[row][col] == -1) {
        obstacles++;
      }

      if (grid[row][col] == 1) {
        startingSquare = [row, col];
      }
    }
  }

  function dfs(row, col, steps, rows, cols, grid) {
    const directions = [0, 1, 0, -1, 0];
    grid[row][col] = -1;

    for (let i = 0; i < 4; i++) {
      const nextRow = row + directions[i];
      const nextCol = col + directions[i + 1];

      if (isInGrid(nextRow, nextCol, rows, cols)) {
        if (grid[nextRow][nextCol] == 2 && steps === rows * cols - obstacles - 1) {
          paths++;
        }
        if (grid[nextRow][nextCol] == 0)
          dfs(nextRow, nextCol, steps + 1, rows, cols, grid);
      }
    }

    grid[row][col] = 0;
    steps -= 1;

    return;
  }

  dfs(startingSquare[0], startingSquare[1], 1, rows, cols, grid);

  return paths;
}
