/**
 * @param {number[][]} matrix
 * @return {number}
 */
function minFallingPathSum(matrix) {
  const rows = matrix.length;
  const cols = matrix[0].length;
  let prevRow = [...matrix[0]];

  for (let row = 1; row < rows; row++) {
    let curRow = new Array(cols).fill(1e5 + 1);
    for (let col = 0; col < cols; col++) {
      curRow[col] = Math.min(
        curRow[col],
        matrix[row][col] +
          Math.min(
            prevRow[col - 1] || 1e5 + 1,
            prevRow[col],
            prevRow[col + 1] || 1e5 + 1
          )
      );
    }
    prevRow = curRow;
  }

  return Math.min(...prevRow);
}
