/**
 * @param {number[]} nums
 * @return {boolean}
 */
function containsDuplicate(nums) {
  let numMap = new Map()
  for (let num of nums) {
    if (numMap.get(num)) {
      return true
    }
    
    numMap.set(num, true)
  }
  
  return false
};