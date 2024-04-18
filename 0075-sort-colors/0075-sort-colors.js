function sortTwoColors(nums, color, startIndex) {
  let l = startIndex;
  let r = nums.length - 1;

  while (l <= r) {
    if (nums[l] === color) {
      l++;
    } else if (nums[r] !== color) {
      r--;
    } else {
      [nums[l], nums[r]] = [nums[r], nums[l]];
      l++;
      r--;
    }
  }

  return l;
}

/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
function sortColors(nums) {
  const lastZeroIndex = sortTwoColors(nums, 0, 0);
  sortTwoColors(nums, 1, lastZeroIndex);
}
