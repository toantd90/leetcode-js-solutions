/**
 * @param {number[][]} grid
 * @return {number}
 */
function projectionArea(grid) {
  const n = grid.length;
  let area = 0;
  let maxCols = new Array(n).fill(0);

  for (let i = 0; i < n; i++) {
    let maxRow = 0;
    for (let j = 0; j < n; j++) {
      maxRow = Math.max(maxRow, grid[i][j]);
      maxCols[j] = Math.max(maxCols[j], grid[i][j]);
      if (grid[i][j] !== 0) area++;
    }

    area += maxRow;
  }

  return area + maxCols.reduce((acc, cur) => acc + cur, 0);
}
