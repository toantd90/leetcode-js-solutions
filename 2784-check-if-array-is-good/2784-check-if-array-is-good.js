/**
 * @param {number[]} nums
 * @return {boolean}
 */
function isGood(nums) {
  nums.sort((n1, n2) => n1 - n2);
  const n = nums.length;

  if (nums[0] !== 1 || nums[n - 1] >= n) {
    return false;
  }

  for (let i = 0; i < n - 1; i++) {
    if (nums[i] !== i + 1) {
      return false;
    }
  }

  return nums[n - 1] === n - 1;
}
