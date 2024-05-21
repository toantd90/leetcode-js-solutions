function has3CellsSameColor(grid, cells) {
  let bCount = 0;
  let wCount = 0;

  for (const [row, col] of cells) {
    if (grid[row][col] === "B") {
      bCount++;
    } else {
      wCount++;
    }
  }

  return bCount >= 3 || wCount >= 3;
}

/**
 * @param {character[][]} grid
 * @return {boolean}
 */
function canMakeSquare(grid) {
  const needToCheckCells = [
    [
      [0, 0],
      [0, 1],
      [1, 0],
      [1, 1],
    ],
    [
      [0, 1],
      [0, 2],
      [1, 1],
      [1, 2],
    ],
    [
      [1, 0],
      [1, 1],
      [2, 0],
      [2, 1],
    ],
    [
      [1, 1],
      [1, 2],
      [2, 1],
      [2, 2],
    ],
  ];

  return needToCheckCells.some((cells) => has3CellsSameColor(grid, cells));
}
