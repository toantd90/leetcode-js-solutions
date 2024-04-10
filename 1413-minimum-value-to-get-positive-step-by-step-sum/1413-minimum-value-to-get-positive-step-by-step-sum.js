/**
 * @param {number[]} nums
 * @return {number}
 */
function minStartValue(nums) {
  let prefixSum = nums[0];
  let minPrefixSum = nums[0];

  for (let i = 1; i < nums.length; i++) {
    prefixSum += nums[i];
    minPrefixSum = Math.min(minPrefixSum, prefixSum);
  }

  return minPrefixSum > 0 ? 1 : 1 - minPrefixSum;
}
