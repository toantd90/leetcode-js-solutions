/**
 * @param {number[]} nums
 * @return {number[]}
 */
function getConcatenation(nums) {
  const n = nums.length
  let ans = new Array(n * 2)
  for (let i = 0; i < nums.length; i++) {
    ans[i] = nums[i]
    ans[i + n] = nums[i]
  }
  
  return ans
};