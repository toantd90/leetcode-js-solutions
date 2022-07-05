/**
 * @param {number[]} nums
 * @return {number}
 */
var longestConsecutive = function(nums) {
  if (nums.length === 0) return 0
  
  let numMap = {}
  nums.forEach(num => numMap[num] = 1)
  
  let longest = 0
  
  for (let i = 0; i < nums.length; i++) {
    let cnt = 1
    let cur = nums[i]
    
    if (numMap[cur] !== 1) continue
    while (numMap[cur + 1]) {
      numMap[cur + 1] = numMap[cur] + 1
      cur = cur + 1
      cnt++
    }
    
    longest = Math.max(longest, cnt)
  }
  
  return longest
};