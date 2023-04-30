/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
function maximizeSum(nums, k) {
  nums.sort((n1, n2) => n1 - n2);

  return nums[nums.length - 1] * k + (k * (k - 1)) / 2;
}
