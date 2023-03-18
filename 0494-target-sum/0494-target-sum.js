/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
let goal = 0;
let sum = 0;
var findTargetSumWays = function (nums, target) {
  const len = nums.length;
  sum = nums.reduce((a, b) => a + b);
  goal = target;
  // why sum * 2 + 1? all possible subsum ranges from all negative to all positive plus zero in the middle
  const memo = new Array(len)
    .fill(null)
    .map(() => new Array(sum * 2 + 1).fill(null));
  const res = dfs(nums, 0, memo, 0);
  return res;
};

const dfs = (nums, total, memo, idx) => {
  if (idx === nums.length) {
    if (total === goal) return 1;
    else return 0;
  }

  // we make the negative total's index valid by adding the sum to it
  if (memo[idx][total + sum] !== null) return memo[idx][total + sum];

  const pos = dfs(nums, total + nums[idx], memo, idx + 1);
  const neg = dfs(nums, total - nums[idx], memo, idx + 1);

  memo[idx][total + sum] = pos + neg;

  return memo[idx][total + sum];
};
