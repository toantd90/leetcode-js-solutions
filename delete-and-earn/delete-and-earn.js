/**
 * @param {number[]} nums
 * @return {number}
 */
var deleteAndEarn = function(nums) {
  let count = {}
  let numSet = []
  
  for (let num of nums) {
    if (!count[num]) {
      count[num] = 0
      numSet.push(num)
    }
    count[num]++
  }
  
  numSet.sort((n1, n2) => n1 - n2)
  
  let dp = [0, 0]
  
  for (let i = 2; i < numSet.length + 2; i++) {
    if (numSet[i - 2] - numSet[i - 3] === 1)
      dp[i] = Math.max(dp[i - 2] + numSet[i - 2] * count[numSet[i - 2]], dp[i - 1])
    else
      dp[i] = dp[i - 1] + numSet[i - 2] * count[numSet[i - 2]]
  }
  
  return dp[numSet.length + 1]
};