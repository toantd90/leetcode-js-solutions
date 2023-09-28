/**
 * @param {number[]} nums
 * @return {number[]}
 */
function sortArrayByParity(nums) {
  let l = 0;
  let r = nums.length - 1;
  while (l < r) {
    if (nums[l] % 2 === 1 && nums[r] % 2 === 0) {
      [nums[l], nums[r]] = [nums[r], nums[l]]
    } else if (nums[l] % 2 === 0) {
      l++
    } else if (nums[r] % 2 === 1) {
      r--
    }
  }
  
  return nums
};