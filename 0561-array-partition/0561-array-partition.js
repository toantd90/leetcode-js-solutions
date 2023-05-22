/**
 * @param {number[]} nums
 * @return {number}
 */
function arrayPairSum(nums) {
  // sort and sum up the minimum of the pairs
  return nums
    .sort((a, b) => a - b)
    .reduce((sum, cur, i) => (i % 2 === 0 ? (sum += cur) : sum), 0);
}
