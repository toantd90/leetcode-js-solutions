/**
 * @param {number[]} nums
 * @return {number}
 */
var rob = function(nums) {
  const n = nums.length
  if (n == 0) return 0
  if (n == 1) return nums[0]
  if (n == 2) return Math.max(nums[0], nums[1])

  let dp1 = [0, nums[0]]
  let dp2 = [0, nums[1]]
  
  for (let i = 2; i < n; i++) {
    dp1[i] = Math.max(dp1[i - 2] + nums[i - 1], dp1[i - 1])
    dp2[i] = Math.max(dp2[i - 2] + nums[i], dp2[i - 1])
  }
  
  return Math.max(dp1[n - 1], dp2[n - 1])
};