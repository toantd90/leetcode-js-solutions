/**
 * @param {number[]} nums
 * @return {number}
 */
var missingNumber = function(nums) {
  const expectedSum = nums.length * (nums.length + 1) / 2
  let actualSum = nums.reduce((cur, acc) => acc + cur)
  
  return expectedSum - actualSum
};