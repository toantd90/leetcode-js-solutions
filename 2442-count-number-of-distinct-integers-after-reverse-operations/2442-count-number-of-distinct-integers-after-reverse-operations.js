/**
 * @param {number[]} nums
 * @return {number}
 */
function countDistinctIntegers(nums) {
  let set = new Set([...nums])
  
  for (let num of nums) {
    set.add(Number(num.toString().split('').reverse().join('')))
  }
  
  return set.size
};