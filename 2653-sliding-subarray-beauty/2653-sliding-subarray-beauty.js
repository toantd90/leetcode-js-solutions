/**
 * @param {number[]} nums
 * @param {number} k
 * @param {number} x
 * @return {number[]}
 */
function getSubarrayBeauty(nums, k, x) {
  let count = new Array(101).fill(0);

  for (let i = 0; i < k; i++) {
    count[50 + nums[i]]++;
  }

  let ans = [];

  for (let i = k - 1; i < nums.length; i++) {
    let currentCnt = 0;
    let j = 0;

    while (currentCnt < x) {
      currentCnt += count[j];
      j++;
    }
    ans.push(j - 50 - 1 > 0 ? 0 : j - 50 - 1);

    count[50 + nums[i - k + 1]]--;
    count[50 + nums[i + 1]]++;
  }

  return ans;
}
