/**
 * @param {number[]} nums
 * @return {number}
 */
var rob = function(nums) {
  if (!nums || !nums.length) return 0
  
  let prev1 = nums[0]
  let prev2 = 0
  
  for (let i = 1; i < nums.length; i++) {
    const temp = prev1
    prev1 = Math.max(prev2 + nums[i], prev1)
    prev2 = temp
  }
  
  return prev1;
};