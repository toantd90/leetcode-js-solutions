/**
 * @param {number} target
 * @param {number[]} nums
 * @return {number}
 */
function minSubArrayLen(target, nums) {
  let left = 0;
  let right = 0;
  let sum = 0;
  let minLength = nums.length + 1;

  while (right < nums.length) {
    sum += nums[right++];

    while (sum >= target) {
      sum -= nums[left++];
      minLength = Math.min(minLength, right - left + 1);
    }
    
    
  }

  return minLength === nums.length + 1 ? 0 : minLength;
}
