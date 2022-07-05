/**
 * @param {number[]} nums
 * @return {number}
 */
var longestConsecutive = function(nums) {
  if (nums.length === 0) return 0
  
  let numSet = new Set(nums.sort((n1, n2) => n1 - n2))
  let nums1 = [...numSet]
  
  let longest = 1
  
  for (let i = 0; i < nums1.length; i++) {
    let j = i
    while (nums1[j + 1] - nums1[j] === 1) {
      j++
    }
    
    longest = Math.max(longest, j - i + 1)
    i = j
  }
  
  return longest
};