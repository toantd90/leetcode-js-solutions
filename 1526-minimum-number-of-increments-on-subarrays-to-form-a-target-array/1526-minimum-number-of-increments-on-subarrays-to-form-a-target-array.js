/**
 * @param {number[]} target
 * @return {number}
 */
function minNumberOperations(target) {
  let numOfOperations = target[0]
  
  for (let i = 1; i < target.length; i++) {
    numOfOperations += Math.max(target[i] - target[i - 1], 0)
  }
  
  return numOfOperations
};