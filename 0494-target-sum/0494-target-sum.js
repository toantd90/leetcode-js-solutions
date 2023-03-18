function calculate(nums, sum, remain, index, memo) {
  if (index === nums.length) {
    if (remain === 0) {
      return 1;
    } else {
      return 0;
    }
  }

  if (memo[index][remain + sum]) {
    return memo[index][remain + sum];
  }

  const addition = calculate(nums, sum, remain + nums[index], index + 1, memo);
  const subtraction = calculate(
    nums,
    sum,
    remain - nums[index],
    index + 1,
    memo
  );

  memo[index][remain + sum] = addition + subtraction;

  return memo[index][remain + sum];
}

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
function findTargetSumWays(nums, target) {
  const sum = nums.reduce((a, b) => a + b);

  let memo = new Array(nums.length).fill().map((_) => new Array(2 * sum + 1).fill(null));

  return calculate(nums, sum, target, 0, memo);
}
