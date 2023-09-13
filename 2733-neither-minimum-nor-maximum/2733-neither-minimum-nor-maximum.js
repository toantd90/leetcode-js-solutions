/**
 * @param {number[]} nums
 * @return {number}
 */
function findNonMinOrMax(nums) {
  let min = Math.min(nums[0], nums[1], nums[2]);
  let max = Math.max(nums[0], nums[1], nums[2]);

  for (let i = 0; i < 3; i++) {
    if (nums[i] < max && nums[i] > min) {
      return nums[i];
    }
  }

  return -1;
}
