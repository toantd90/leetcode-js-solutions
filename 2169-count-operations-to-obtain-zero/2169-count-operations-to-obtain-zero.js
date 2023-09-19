/**
 * @param {number} num1
 * @param {number} num2
 * @return {number}
 */
function countOperations(num1, num2) {
  let operations = 0
  while (num1 !== 0 && num2 !== 0) {
    if (num1 > num2) {
      num1 -= num2
    } else {
      num2 -= num1
    }
    operations++
  }
  
  return operations
};