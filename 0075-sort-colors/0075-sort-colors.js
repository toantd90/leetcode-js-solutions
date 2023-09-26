/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
function sortColors(nums) {
  let l = 0;
  let r = nums.length - 1;

  while (l < r) {
    while (nums[l] === 0) {
      l++;
    }

    while (l < r && nums[r] === 2) {
      r--;
    }

    if (l < r && (nums[r] === 0 || nums[l] === 2)) {
      [nums[l], nums[r]] = [nums[r], nums[l]];
    }

    r--;

    // nums[l] === 1 || nums[l] === 2
    // nums[r] === 0 || nums[r] === 1
  }

  r = nums.length - 1;
  while (l < r) {
    while (nums[r] === 2) {
      r--;
    }

    if (l < r && nums[l] === 2) {
      [nums[l], nums[r]] = [nums[r], nums[l]];
    }

    l++;
  }
}
