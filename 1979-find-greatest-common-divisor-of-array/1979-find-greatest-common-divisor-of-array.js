/**
 * @param {number[]} nums
 * @return {number}
 */
function findGCD(nums) {
  let min = 1000;
  let max = 1;

  for (let i = 0; i < nums.length; i++) {
    min = Math.min(min, nums[i]);
    max = Math.max(max, nums[i]);
  }

  if (max % min === 0) return min;
  
  for (let i = Math.floor(max / 2); i > 1; i--) {
    if (max % i === 0 && min % i === 0) {
      return i;
    }
  }

  return 1;
}
