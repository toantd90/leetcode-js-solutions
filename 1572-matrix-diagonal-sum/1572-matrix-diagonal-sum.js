/**
 * @param {number[][]} mat
 * @return {number}
 */
const diagonalSum = mat => {
   const m = mat.length
   let sum = 0
   
   
   for (let i = 0; i < m; i++) {
       sum += mat[i][i]
   }
    
   for (let i = 0; i < m; i++) {
       sum += mat[i][m - i - 1]
   }
    
   if (m % 2 === 0) return sum
   const mid = Math.floor(m/2)
   return sum -= mat[mid][mid]
};