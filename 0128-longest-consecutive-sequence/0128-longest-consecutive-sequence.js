/**
 * @param {number[]} nums
 * @return {number}
 */
var longestConsecutive = function(nums) {
  if (nums.length === 0) return 0
  
  nums.sort((n1, n2) => n1 - n2)
  
  let longest = 1
  
  for (let i = 0; i < nums.length; i++) {
    let j = i
    while (nums[j + 1] - nums[j] === 1) {
      j++
    }
    
    longest = Math.max(longest, j - i + 1)
    i = j
  }
  
  return longest
};