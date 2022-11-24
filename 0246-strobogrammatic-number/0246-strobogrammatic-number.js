/**
 * @param {string} num
 * @return {boolean}
 */
function isStrobogrammatic(nums) {
  let l = 0;
  let r = nums.length - 1;
  const strobogrammaticNums = '018';

  while (l < r) {
    if (
      (nums[l] == '6' && nums[r] == '9') ||
      (nums[l] == '9' && nums[r] == '6')
    ) {
      l++;
      r--;
    } else if (
      strobogrammaticNums.includes(nums[l]) &&
      strobogrammaticNums.includes(nums[r]) &&
      nums[l] == nums[r]
    ) {
      l++;
      r--;
    } else {
      return false;
    }
  }

  if (l == r) {
    return strobogrammaticNums.includes(nums[l]);
  }

  return true;
}
