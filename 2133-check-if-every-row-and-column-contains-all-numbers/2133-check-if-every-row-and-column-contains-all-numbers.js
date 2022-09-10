/**
 * @param {number[][]} matrix
 * @return {boolean}
 */
function checkValid(matrix) {
  const m = matrix.length
  
  for (let i = 0; i < m; i++) {
    let row = new Set()
    let col = new Set()
    for (let j = 0; j < m; j++) {
      if (row.has(matrix[i][j]) || col.has(matrix[j][i])) return false
      row.add(matrix[i][j])
      col.add(matrix[j][i])
    }
  }
  
  return true
};