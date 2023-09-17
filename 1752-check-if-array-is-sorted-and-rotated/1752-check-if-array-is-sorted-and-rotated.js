/**
 * @param {number[]} nums
 * @return {boolean}
 */
function check(nums) {
  let isPivotFound = false;
  for (let i = 1; i < nums.length; i++) {
    if (nums[i] < nums[i - 1]) {
      if (isPivotFound) {
        return false;
      }

      isPivotFound = true;
    }
  }

  if (!isPivotFound) {
    return true;
  }

  return nums[nums.length - 1] <= nums[0];
}
