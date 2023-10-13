/**
 * @param {number[]} nums
 * @return {number[]}
 */
function distinctDifferenceArray(nums) {
  let prefix = Array(nums.length);
  let suffix = Array(nums.length);

  prefix[0] = { [nums[0]]: 1 };
  suffix[nums.length - 1] = { [nums[nums.length - 1]]: 1 };
  for (let i = 1; i < nums.length; i++) {
    prefix[i] = {
      ...prefix[i - 1],
      [nums[i]]: (prefix[i - 1][nums[i]] || 0) + 1,
    };
    const suffixIndex = nums.length - 1 - i;
    suffix[suffixIndex] = {
      ...suffix[suffixIndex + 1],
      [nums[suffixIndex]]:
        (suffix[suffixIndex + 1][nums[suffixIndex]] || 0) + 1,
    };
  }

  let ans = [];
  for (let i = 0; i < nums.length - 1; i++) {
    ans.push(Object.keys(prefix[i]).length - Object.keys(suffix[i + 1]).length);
  }

  ans.push(Object.keys(prefix[nums.length - 1]).length);

  return ans;
}
