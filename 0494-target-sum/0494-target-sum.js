function calculate(nums, target, sum, index, memo) {
  if (index === nums.length) {
    if (sum === target) {
      return 1;
    } else {
      return 0;
    }
  }

  if (memo[index][sum]) {
    return memo[index][sum];
  }

  const addition = calculate(nums, target, sum + nums[index], index + 1, memo);
  const subtraction = calculate(
    nums,
    target,
    sum - nums[index],
    index + 1,
    memo
  );

  memo[index][sum] = addition + subtraction;

  return memo[index][sum];
}

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
function findTargetSumWays(nums, target) {
  let memo = new Array(nums.length).fill().map((_) => ({}));

  return calculate(nums, target, 0, 0, memo);
}
