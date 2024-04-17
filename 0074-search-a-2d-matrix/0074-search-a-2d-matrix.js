/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
function searchMatrix(matrix, target) {
  const m = matrix.length;
  const n = matrix[0].length;
  let l = 0;
  let r = m * n - 1;

  while (l <= r) {
    const mid = l + Math.floor((r - l) / 2);
    const row = Math.floor(mid / n);
    const col = mid % n;
    const value = matrix[row][col];

    if (value === target) {
      return true;
    } else if (value > target) {
      r = mid - 1;
    } else {
      l = mid + 1;
    }
  }

  return false;
}
