/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
  let currentIndex = 1
  
  for (let i = 1; i < nums.length; i++) {
    if (nums[i] !== nums[i - 1]) {
      nums[currentIndex] = nums[i]
      currentIndex++
    }
  }
  
  return currentIndex
};