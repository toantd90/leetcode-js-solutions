/**
 * @param {number[]} arr
 * @return {boolean}
 */
var uniqueOccurrences = function(arr) {
  let count = {}
  for (let num of arr) {
    count[num] = (count[num] || 0) + 1
  }
  
  let counts = new Set()
  const values = Object.values(count)
  for (let i = 0; i < values.length; i++) {
    const value = values[i]
    if (counts.has(value)) {
      return false
    }
    counts.add(value)
  }
  
  return true
};