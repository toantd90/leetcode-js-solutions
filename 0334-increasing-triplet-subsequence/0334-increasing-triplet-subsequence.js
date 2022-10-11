/**
 * @param {number[]} nums
 * @return {boolean}
 */
function increasingTriplet(nums) {
  const n = nums.length;

  if (n < 3) return false;

  let minFromLeft = new Array(n);
  let maxFromRight = new Array(n);
  minFromLeft[0] = nums[0];
  minFromLeft[1] = nums[0];
  maxFromRight[n - 1] = nums[n - 1];
  maxFromRight[n - 2] = nums[n - 1];

  for (let i = 2; i < n; i++) {
    minFromLeft[i] = Math.min(minFromLeft[i - 1], nums[i - 1]);
    maxFromRight[n - i - 1] = Math.max(
      maxFromRight[n - i],
      nums[n - i]
    );
  }

  for (let i = 1; i < n - 1; i++) {
    if (nums[i] > minFromLeft[i] && nums[i] < maxFromRight[i]) return true;
  }

  return false;
}
