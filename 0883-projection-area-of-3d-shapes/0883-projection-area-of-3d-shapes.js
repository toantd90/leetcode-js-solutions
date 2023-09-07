/**
 * @param {number[][]} grid
 * @return {number}
 */
function projectionArea(grid) {
  const n = grid.length;
  let area = 0;

  for (let i = 0; i < n; i++) {
    let maxRow = 0;
    let maxCol = 0
    for (let j = 0; j < n; j++) {
      maxRow = Math.max(maxRow, grid[i][j]);
      maxCol = Math.max(maxCol, grid[j][i])
      if (grid[i][j] !== 0) area++;
    }

    area += maxRow + maxCol;
  }

  return area;
}
