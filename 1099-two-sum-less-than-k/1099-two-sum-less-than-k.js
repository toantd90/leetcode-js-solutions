/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
function twoSumLessThanK(nums, k) {
  nums.sort((n1, n2) => n1 - n2)
  
  let l = 0, r = nums.length - 1
  
  let max = -1
  
  while (l < r) {
    const sum = nums[l] + nums[r]
    if (sum >= k) {
      r--
    } else {
      if (sum > max) {
        max = sum
      }
      l++
    }
  }
    
  return max
};