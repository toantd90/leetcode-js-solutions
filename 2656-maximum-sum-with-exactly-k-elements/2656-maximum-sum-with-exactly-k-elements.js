/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
function maximizeSum(nums, k) {
  let max = 0;

  for (let num of nums) {
    max = Math.max(max, num);
  }

  return max * k + (k * (k - 1)) / 2;
}
