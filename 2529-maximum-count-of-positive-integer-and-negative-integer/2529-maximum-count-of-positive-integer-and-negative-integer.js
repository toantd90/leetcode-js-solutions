/**
 * @param {number[]} nums
 * @return {number}
 */
function maximumCount(nums) {
  let i = 0;

  while (nums[i] < 0) {
    i++;
  }

  let j = i;
  while (nums[j] == 0) {
    j++;
  }

  return Math.max(i, nums.length - i - (j - i));
}
