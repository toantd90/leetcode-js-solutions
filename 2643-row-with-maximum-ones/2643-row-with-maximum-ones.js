/**
 * @param {number[][]} mat
 * @return {number[]}
 */
function rowAndMaximumOnes(mat) {
  let ans = [0, 0];

  const m = mat.length;
  const n = mat[0].length;

  for (let i = 0; i < m; i++) {
    let count = 0;
    for (let j = 0; j < n; j++) {
      if (mat[i][j] === 1) {
        count++;
      }
    }

    if (count > ans[1]) {
      ans = [i, count];
    }
  }

  return ans;
}
