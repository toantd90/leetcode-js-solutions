/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
function subarraysDivByK(nums, k) {
  const length = nums.length;
  let prefixSum = (nums[0] % k + k) % k;
  let prefixSumMod = new Array(k).fill(0);
  let numOfSubArray = prefixSum === 0 ? 1 : 0;
  prefixSumMod[prefixSum] = 1;

  for (let i = 1; i < length; i++) {
    prefixSum = (prefixSum + nums[i] % k + k) % k;
    numOfSubArray += prefixSumMod[prefixSum];
    if (prefixSum === 0) numOfSubArray++;
    prefixSumMod[prefixSum]++;
  }

  return numOfSubArray;
}
