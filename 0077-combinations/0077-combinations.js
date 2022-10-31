
function backtrack(currentNumber, combination, n, k, result) {
  if (combination.length == k) {
    result.push([...combination])
    return
  }
  
  for (let nextNumber = currentNumber + 1; nextNumber <= n; nextNumber++) {
    combination.push(nextNumber)
    backtrack(nextNumber, combination, n, k, result)
    combination.pop()
  }
}

/**
 * @param {number} n
 * @param {number} k
 * @return {number[][]}
 */
function combine(n, k) {
  let result = []
  
  for (let currentNumber = 1; currentNumber <= n - k + 1; currentNumber++) {
    backtrack(currentNumber, [currentNumber], n, k, result)
  }
  
  return result
};