/**
 * @param {number[]} nums
 * @return {number}
 */
function findDuplicate(nums) {
  const n = nums.length;
  let cnt = new Array(n + 1).fill(0);
  for (let i = 0; i < n; i++) {
    if (cnt[nums[i]]) return nums[i];
    cnt[nums[i]] = 1;
  }
}
