/**
 * @param {number[]} nums
 * @return {number}
 */
function findNonMinOrMax(nums) {
  nums.sort((n1, n2) => n1 - n2);

  for (let i = 1; i < nums.length; i++) {
    if (nums[i] !== nums[i - 1] && i !== nums.length - 1) {
      return nums[i];
    }
  }

  return -1;
}
