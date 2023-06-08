function isExitCell(row, col, startRow, startCol, rows, cols) {
  return (
    (row !== startRow || col !== startCol) &&
    (row === 0 || row === rows - 1 || col === 0 || col === cols - 1)
  );
}

function isInMaze(row, col, rows, cols) {
  return row >= 0 && row < rows && col >= 0 && col < cols;
}

/**
 * @param {character[][]} maze
 * @param {number[]} entrance
 * @return {number}
 */
function nearestExit(maze, entrance) {
  const rows = maze.length;
  const cols = maze[0].length;

  let queue = [entrance];
  const directions = [
    [0, -1],
    [0, 1],
    [1, 0],
    [-1, 0],
  ];
  let steps = 0;
  maze[entrance[0]][entrance[1]] = "+";

  while (queue.length) {
    const size = queue.length;

    for (let i = 0; i < size; i++) {
      const [currRow, currCol] = queue[i];
      if (isExitCell(currRow, currCol, entrance[0], entrance[1], rows, cols)) {
        return steps;
      }

      for (let [addRow, addCol] of directions) {
        const nextRow = currRow + addRow;
        const nextCol = currCol + addCol;

        if (
          isInMaze(nextRow, nextCol, rows, cols) &&
          maze[nextRow][nextCol] === "."
        ) {
          maze[nextRow][nextCol] = "+";
          queue.push([nextRow, nextCol]);
        }
      }
    }

    steps++;
    queue.splice(0, size);
  }

  return -1;
}