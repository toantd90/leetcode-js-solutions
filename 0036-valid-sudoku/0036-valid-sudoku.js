/**
 * @param {character[][]} board
 * @return {boolean}
 */
function isValidSudoku(board) {
  let cols = new Array(9).fill(null).map(() => new Set());
  let rows = new Array(9).fill(null).map(() => new Set());
  let boxes = new Array(9).fill(null).map(() => new Set());

  for (let i = 0; i < 9; i++) {
    for (let j = 0; j < 9; j++) {
      const boxIndex = 3 * Math.floor(i / 3) + Math.floor(j / 3);
      const cell = board[i][j];
      if (cell === ".") {
        continue;
      }
      if (
        rows[i].has(cell) ||
        cols[j].has(cell) ||
        boxes[boxIndex].has(cell)
      ) {
        return false;
      }
      rows[i].add(cell);
      cols[j].add(cell);
      boxes[boxIndex].add(cell);
    }
  }

  return true;
}
