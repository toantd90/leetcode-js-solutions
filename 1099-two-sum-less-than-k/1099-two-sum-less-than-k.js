/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
function twoSumLessThanK(nums, k) {
  let max = -1
  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      const sum = nums[i] + nums[j]
      if (sum < k && sum > max) {
        max = sum
      }
    }
  }
    
  return max
};