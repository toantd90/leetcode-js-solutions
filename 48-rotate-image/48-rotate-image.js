/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
const rotate = matrix => {
  const rows = matrix.length;
  
  for (let i = 0; i < rows; i++) {
    for (let j = i; j < rows; j++) {
      const temp = matrix[i][j];
      matrix[i][j] = matrix[j][i];
      matrix[j][i] = temp;
    }
  }
  
  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < rows / 2; j++) {
      const temp = matrix[i][j];
      matrix[i][j] = matrix[i][rows - 1 - j];
      matrix[i][rows - 1 - j] = temp;
    }
  }
};