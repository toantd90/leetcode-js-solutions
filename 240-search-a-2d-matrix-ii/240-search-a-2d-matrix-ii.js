const binarySearch = (arr, target) => {
  let l = 0
  let r = arr.length - 1
  
  if (target < arr[l] || target > arr[r]) return
  
  while (l <= r) {
    const mid = l + Math.floor((r - l) / 2)
    
    if (arr[mid] === target) {
      return true
    } else if (arr[mid] > target) {
      r = mid - 1
    } else {
      l = mid + 1
    }
  }
}


/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
const searchMatrix = (matrix, target) => {
  const m = matrix.length
  const n = matrix[0].length
  
  for (let i = 0; i < m; i++) {
    if (binarySearch(matrix[i], target)) {
      return true
    }
  }
  
  return false
};