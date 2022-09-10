/**
 * @param {number[][]} matrix
 * @return {boolean}
 */
function checkValid(matrix) {
  const m = matrix.length
  
  
  for (let i = 0; i < m; i++) {
    let temp = new Array(m).fill(0)
    for (let j = 0; j < m; j++) {
      const num = matrix[i][j]
      if (temp[num - 1]) return false
      temp[num - 1] = 1
    }
  }
  
  for (let i = 0; i < m; i++) {
    let temp = new Array(m).fill(0)
    for (let j = 0; j < m; j++) {
      const num = matrix[j][i]
      if (temp[num - 1]) return false
      temp[num - 1] = 1
    }
  }
  
  return true
};