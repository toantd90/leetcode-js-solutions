/**
 * @param {number[]} nums
 * @return {number}
 */
function maximumCount(nums) {
  let l = 0;
  let r = nums.length;

  while (l < r) {
    const mid = l + Math.floor((r - l) / 2);
    if (nums[mid] <= 0) {
      l = mid + 1;
    } else {
      r = mid;
    }
  }

  const firstPositiveIndex = r;

  l = -1;
  while (l <= r) {
    const mid = l + Math.floor((r - l) / 2);
    if (nums[mid] >= 0) {
      r = mid - 1;
    } else {
      l = mid + 1;
    }
  }

  const lastNegativeIndex = r;

  return Math.min(
    nums.length,
    Math.max(lastNegativeIndex + 1, nums.length - firstPositiveIndex)
  );
}
