/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
function checkSubarraySum(nums, k) {
  if (nums.length == 1) return false;
  let modSet = new Set();

  let lastMod = (nums[0] + nums[1]) % k;

  if (lastMod == 0) return true;

  modSet.add(lastMod);

  for (let i = 2; i < nums.length; i++) {
    if ((nums[i] + nums[i - 1]) % k == 0 || modSet.has(k - (nums[i] % k))) {
      return true;
    }

    modSet.delete(lastMod);
    modSet.add((nums[i] + nums[i - 1]) % k);
    modSet.add((lastMod + nums[i]) % k);
    lastMod += nums[i] % k;
  }

  return false;
}
