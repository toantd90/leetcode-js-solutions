/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
const searchMatrix = (matrix, target) => {
   const m = matrix.length
   const n = matrix[0].length
   
   let l = 0
   let r = m * n - 1
   
   while (l <= r) {
       const mid = Math.floor((l + r) / 2)
       const midValue = matrix[Math.floor(mid / n)][mid % n]
       if (midValue === target) {
           return true
       } else if (midValue > target) {
           r = mid - 1
       } else {
           l = mid + 1
       }
   }
    
   return false
};