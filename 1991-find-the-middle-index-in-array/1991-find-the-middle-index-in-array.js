/**
 * @param {number[]} nums
 * @return {number}
 */
var findMiddleIndex = function(nums) {
  const n = nums.length
  let leftToRightSum = new Array(n)
  let rightToLeftSum = new Array(n)
  leftToRightSum[0] = nums[0]
  rightToLeftSum[n - 1] = nums[n - 1]
  
  for (let i = 1; i < n; i++) {
    leftToRightSum[i] = leftToRightSum[i - 1] + nums[i]
    rightToLeftSum[n - i - 1] = rightToLeftSum[n - i] + nums[n -  i - 1]
  }
  
  for (let i = 0; i < n; i++) {
    if (leftToRightSum[i] == rightToLeftSum[i])
      return i
  }
  
  return -1
};