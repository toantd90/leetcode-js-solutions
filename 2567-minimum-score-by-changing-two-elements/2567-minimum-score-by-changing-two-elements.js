/**
 * @param {number[]} nums
 * @return {number}
 */
function minimizeSum(nums) {
  const length = nums.length;
  if (length == 3) return 0;

  nums.sort((n1, n2) => n1 - n2);

  return Math.min(
    nums[length - 2] - nums[1],
    nums[length - 1] - nums[2],
    nums[length - 3] - nums[0]
  );
}
