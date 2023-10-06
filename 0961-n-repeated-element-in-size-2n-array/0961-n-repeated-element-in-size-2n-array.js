/**
 * @param {number[]} nums
 * @return {number}
 */
function repeatedNTimes(nums) {
  let count = {};

  for (let i = 0; i < nums.length; i++) {
    const num = nums[i];
    count[num] = (count[num] || 0) + 1;

    if (count[num] === nums.length / 2) {
      return num;
    }
  }
}
