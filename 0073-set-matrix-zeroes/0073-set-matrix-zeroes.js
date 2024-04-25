/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
const setZeroes = (matrix) => {
  const m = matrix.length;
  const n = matrix[0].length;

  let rows = new Set();
  let cols = new Set();

  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (matrix[i][j] === 0) {
        rows.add(i);
        cols.add(j);
      }
    }
  }

  rows.forEach(row => {
    for (let j = 0; j < n; j++) {
      matrix[row][j] = 0;
    }
  });

  cols.forEach(col => {
    for (let i = 0; i < m; i++) {
      matrix[i][col] = 0;
    }
  });
};
