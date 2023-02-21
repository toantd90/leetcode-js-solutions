/**
 * @param {number[]} nums
 * @return {number}
 */
const singleNonDuplicate = nums => {
  if (nums.length === 1) {
    return nums[0]
  }
  
  if (nums[0] !== nums[1]) {
    return nums[0]
  }
  
  for (let i = 1; i < nums.length; i++) {
    if (nums[i] !== nums[i - 1] && nums[i] !== nums[i + 1])
      return nums[i]
  }
};