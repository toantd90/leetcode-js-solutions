/**
 * @param {number[]} nums
 * @return {number}
 */
function arraySign(nums) {
  let negativeCount = 0;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === 0) {
      return 0;
    }

    if (nums[i] < 0) {
      negativeCount++;
    }
  }

  return negativeCount % 2 === 1 ? -1 : 1;
}
