/**
 * @param {number[]} nums
 * @return {boolean}
 */
function canPartition(nums) {
  const sum = nums.reduce((acc, cur) => acc + cur, 0)
  if (sum % 2 != 0) return false

  const target = sum / 2
  
  let dp = new Array(nums.length + 1).fill().map(_ => new Array(target + 1).fill(false))
  
  for (let i = 0; i < nums.length + 1; i++) {
    dp[i][0] = true
  }
  
  for (let i = 1; i < nums.length; i++) {
    if (nums[i] > target) return false
    for (let j = 1; j < target + 1; j++) {
      if (j < nums[i]) {
        dp[i][j] = dp[i - 1][j]
      } else {
        dp[i][j] = dp[i - 1][j] || dp[i - 1][j - nums[i]]  
      }
      
      if (j == target && dp[i][j]) return true
    }
  }
  
  return dp[nums.length - 1][target]
};