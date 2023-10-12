/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
function countPairs(nums, target) {
  nums.sort((n1, n2) => n1 - n2);
  let cnt = 0;
  let l = 0;
  let r = nums.length - 1;

  while (l < r) {
    if (nums[l] + nums[r] >= target) {
      r--;
    } else {
      cnt += r - l;
      l++;
    }
  }

  return cnt;
}
