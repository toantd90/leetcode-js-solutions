/**
 * @param {number[]} nums
 * @param {number} n
 * @return {number[]}
 */
function shuffle(nums, n) {
  let result = new Array(2 * n);

  for (let i = 0; i < n; i++) {
    result[2 * i] = nums[i];
    result[2 * i + 1] = nums[i + n];
  }

  return result;
}
