/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortedSquares = function(nums) {
  let left = 0
  let right = nums.length - 1
  
  let answer = []
  
  while (left <= right) {
    if (Math.abs(nums[left]) > Math.abs(nums[right])) {
      answer.push(Math.pow(nums[left++], 2))
    } else {
      answer.push(Math.pow(nums[right--], 2))
    }
  }
  
  return answer.reverse()
};