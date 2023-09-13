/**
 * @param {number[]} nums
 * @return {number}
 */
function findNonMinOrMax(nums) {
  let min = nums[0];
  let max = nums[0];

  for (let i = 1; i < nums.length; i++) {
    if (nums[i] > max) {
      max = nums[i];
    }

    if (nums[i] < min) {
      min = nums[i];
    }
  }

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] !== min && nums[i] !== max) {
      return nums[i];
    }
  }

  return -1;
}
