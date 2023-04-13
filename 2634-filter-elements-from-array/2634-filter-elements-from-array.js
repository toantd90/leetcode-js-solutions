/**
 * @param {number[]} arr
 * @param {Function} fn
 * @return {number[]}
 */
function filter(arr, fn) {
  return arr.filter((num, i) => fn(num, i))    
};