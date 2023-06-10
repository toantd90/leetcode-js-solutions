/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
function findMaxAverage(nums, k) {
  let total = 0;
  for (let i = 0; i < k; i++) {
    total += nums[i];
  }

  let average = total / k;

  for (let i = k; i < nums.length; i++) {
    total = total - nums[i - k] + nums[i];
    average = Math.max(average, total / k);
  }

  return average;
}
