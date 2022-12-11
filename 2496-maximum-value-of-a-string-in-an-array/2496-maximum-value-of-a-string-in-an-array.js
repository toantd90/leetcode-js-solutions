function isNumeric(str) {
  return str.split('').every(c => !Number.isNaN(Number(c)))
}

/**
 * @param {string[]} strs
 * @return {number}
 */
var maximumValue = function(strs) {
  let maximum = 0
  
  for (let str of strs) {
    maximum = Math.max(maximum, isNumeric(str) ? Number(str) : str.length)
  }
  
  return maximum
};