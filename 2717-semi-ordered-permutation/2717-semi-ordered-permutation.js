/**
 * @param {number[]} nums
 * @return {number}
 */
function semiOrderedPermutation(nums) {
  const maximum = nums.indexOf(Math.max(...nums));
  const minimum = nums.indexOf(Math.min(...nums));

  return maximum < minimum
    ? nums.length - 1 - maximum + minimum - 1
    : nums.length - 1 - maximum + minimum;
}
