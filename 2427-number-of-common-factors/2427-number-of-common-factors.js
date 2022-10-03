/**
 * @param {number} a
 * @param {number} b
 * @return {number}
 */
function commonFactors(a, b) {
  let numOfCommonFactors = 1
  
  for (let i = 2; i <= 1000; i++) {
    if (a % i == 0 && b % i == 0) {
      numOfCommonFactors++
    }
  }
  
  return numOfCommonFactors
};