function isInBoard(row, col, rows, cols) {
  return row >= 0 && row < rows && col >= 0 && col < cols;
}

function dfs(row, col, index, path, board, rows, cols, word) {
  if (index == word.length - 1) {
    path.push([row, col]);
    return true;
  }

  board[row][col] = '#';
  path.push([row, col]);

  const directions = [0, 1, 0, -1, 0];

  for (let i = 0; i < 4; i++) {
    const nextRow = row + directions[i];
    const nextCol = col + directions[i + 1];

    if (
      isInBoard(nextRow, nextCol, rows, cols) &&
      board[nextRow][nextCol] == word[index + 1]
    ) {
      if (dfs(nextRow, nextCol, index + 1, path, board, rows, cols, word)) {
        return true;
      }
    }
  }

  board[row][col] = word[index];
  path.pop();

  return false;
}

/**
 * @param {character[][]} board
 * @param {string} word
 * @return {boolean}
 */
function exist(board, word) {
  const rows = board.length;
  const cols = board[0].length;

  for (let row = 0; row < rows; row++) {
    for (let col = 0; col < cols; col++) {
      let path = [];
      if (board[row][col] == word[0])
        if (dfs(row, col, 0, path, board, rows, cols, word)) {
          return path;
        }
    }
  }

  return [];
}
