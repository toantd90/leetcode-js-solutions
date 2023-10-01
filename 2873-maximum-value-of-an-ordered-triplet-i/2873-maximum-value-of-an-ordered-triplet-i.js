/**
 * @param {number[]} nums
 * @return {number}
 */
function maximumTripletValue(nums) {
  let maximum = 0;

  for (let i = nums.length - 1; i >= 2; i--) {
    let maxSub = 0;
    for (let j = 0; j <= i - 2; j++) {
      for (let k = j + 1; k <= i - 1; k++) {
        maxSub = Math.max(maxSub, nums[j] - nums[k]);
      }
    }
    maximum = Math.max(maximum, nums[i] * maxSub);
  }

  return maximum;
}
