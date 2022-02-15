/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
const numSubarrayProductLessThanK = (nums, k) => {
  let l = 0;
  let r = 0;
  let product = 1;
  let cnt = 0;

  while (r < nums.length) {
    product *= nums[r];

    while (product >= k && l < r) {
      product /= nums[l++];
    }
    if (product < k) cnt += r - l + 1;
    r++;
  }

  return cnt;
};
