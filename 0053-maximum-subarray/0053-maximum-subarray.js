/**
 * @param {number[]} nums
 * @return {number}
 */
function maxSubArray(nums) {
  let curSum = nums[0]
  let maxSum = nums[0]
  
  for (let i = 1; i < nums.length; i++) {
    curSum = Math.max(curSum + nums[i], nums[i])
    maxSum = Math.max(curSum, maxSum)
  }

  return maxSum
};
