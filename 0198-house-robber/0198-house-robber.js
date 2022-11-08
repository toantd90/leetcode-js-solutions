/**
 * @param {number[]} nums
 * @return {number}
 */
var rob = function(nums) {
  let cur = nums[0]
  let prev = 0
  
  for (let i = 1; i < nums.length; i++) {
    let temp = cur
    cur = Math.max(cur, prev + nums[i])
    prev = temp
  }
  
  return cur
};