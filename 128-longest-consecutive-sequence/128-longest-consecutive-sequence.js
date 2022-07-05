/**
 * @param {number[]} nums
 * @return {number}
 */
var longestConsecutive = function(nums) {
  if (nums.length === 0) return 0
  
  let set = new Set(nums)
  let longest = 0

  for (let num of set) {
    if (set.has(num - 1)) continue
    let curNum = num
    let curLength = 1
    
    while (set.has(curNum + 1)) {
      curNum++
      curLength++
    }
    
    longest = Math.max(longest, curLength)
  }
  
  return longest
};