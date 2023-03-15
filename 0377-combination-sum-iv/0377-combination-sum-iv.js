function calculateCombination(nums, remain, memo) {
  if (memo[remain] !== undefined) {
    return memo[remain];
  }

  let count = 0;
  for (let i = 0; i < nums.length; i++) {
    if (remain - nums[i] >= 0)
      count += calculateCombination(nums, remain - nums[i], memo);
  }

  memo[remain] = count;

  return count;
}

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
function combinationSum4(nums, target) {
  const n = nums.length;
  let memo = new Array(target + 1).fill(undefined);

  memo[0] = 1;

  return calculateCombination(nums, target, memo);
}
