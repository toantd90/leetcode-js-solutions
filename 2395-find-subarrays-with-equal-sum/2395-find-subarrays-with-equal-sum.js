/**
 * @param {number[]} nums
 * @return {boolean}
 */
function findSubarrays(nums) {
  if (nums.length == 2) return false
  let curSum = nums[0] + nums[1]
  let sumMap = {[curSum]: true}
  
  for (let i = 2; i < nums.length; i++) {
    curSum = curSum - nums[i - 2] + nums[i]
    
    if (sumMap[curSum] != undefined) return true
    
    sumMap[curSum] = true
  }
  
  return false
};