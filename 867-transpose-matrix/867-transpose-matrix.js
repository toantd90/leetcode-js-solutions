/**
 * @param {number[][]} matrix
 * @return {number[][]}
 */
const transpose = matrix => {
  const m = matrix.length;
  const n = matrix[0].length;
  let res = new Array(n).fill().map(_ => new Array(m));

  for (let i = 0; i < n; i++) {
    for (let j = 0; j < m; j++) {
      res[i][j] = matrix[j][i];
    }
  }

  return res;
};
