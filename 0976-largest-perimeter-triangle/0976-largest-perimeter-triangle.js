/**
 * @param {number[]} nums
 * @return {number}
 */
function largestPerimeter(nums) {
  nums = nums.sort((a, b) => a - b);
  for (let i = nums.length - 1; i >= 2; i--) {
    if (
      nums[i] + nums[i - 1] > nums[i - 2] &&
      nums[i - 2] + nums[i - 1] > nums[i] &&
      nums[i - 2] + nums[i - 1] > nums[i - 1]
    ) {
      return nums[i] + nums[i - 1] + nums[i - 2];
    }
  }
  return 0;
}
