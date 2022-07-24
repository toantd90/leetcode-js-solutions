/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
const searchMatrix = (matrix, target) => {
  if (!matrix || matrix.length === 0) return false;
  const rows = matrix.length;
  const cols = matrix[0].length;
  
  for (let i = 0; i < rows; i++) {
    if (target < matrix[i][0] || target > matrix[i][cols - 1]) {
      continue;
    }
    let left = 0;
    let right = cols - 1;
    
    while (left <= right) {
      let mid = Math.floor((left + right) / 2);
      if (matrix[i][mid] === target) {
        return true;
      }
      if (matrix[i][mid] > target) {
        right = mid - 1;
      } else {
        left = mid + 1;
      }
    }
  }
  
  return false;
};