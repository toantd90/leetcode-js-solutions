/**
 * @param {number[]} nums
 * @return {boolean}
 */
function increasingTriplet(nums) {
  const n = nums.length;

  if (n < 3) return false;

  let first = nums[0]
  let second = Number.POSITIVE_INFINITY
  
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] <= first) {
      first = nums[i]
    } else if (nums[i] <= second) {
      second = nums[i]
    } else {
      return true
    }
  }

  return false;
}
