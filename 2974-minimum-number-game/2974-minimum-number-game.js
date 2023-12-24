/**
 * @param {number[]} nums
 * @return {number[]}
 */
function numberGame(nums) {
  nums.sort((n1, n2) => n1 - n2);

  for (let i = 0; i < nums.length; i += 2) {
    [nums[i], nums[i + 1]] = [nums[i + 1], nums[i]];
  }

  return nums;
}
