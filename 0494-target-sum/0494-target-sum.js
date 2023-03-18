function calculate(nums, remain, index, memo) {
  if (index === nums.length) {
    if (remain === 0) {
      return 1;
    } else {
      return 0;
    }
  }

  if (memo[index][remain]) {
    return memo[index][remain];
  }

  const addition = calculate(nums, remain + nums[index], index + 1, memo);
  const subtraction = calculate(nums, remain - nums[index], index + 1, memo);

  memo[index][remain] = addition + subtraction;

  return memo[index][remain];
}

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
function findTargetSumWays(nums, target) {
  let memo = new Array(nums.length)
    .fill()
    .map((_) => new Array(2 * Math.abs(target) + 1));

  return calculate(nums, target, 0, memo);
}
