/**
 * @param {number[]} nums
 * @return {number}
 */
var maxAscendingSum = function(nums) {
  let maxSum = 0
  let curSum = 0
  
  for (let i = 0; i < nums.length; i++) {
    let j = i
    let curSum = nums[j]
    if (nums[j + 1] > nums[j]) {
      while (nums[j + 1] > nums[j]) {
        curSum += nums[j + 1]
        j++
      }
    }
    maxSum = Math.max(maxSum, curSum)
    i = j
  }
  
  return maxSum
};