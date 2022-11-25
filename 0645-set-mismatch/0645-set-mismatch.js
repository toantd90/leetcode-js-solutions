/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findErrorNums = function(nums) {
  
  for (let i = 0; i < nums.length; i++) {
    while (nums[i] != i + 1 && nums[i] != nums[nums[i] - 1]) {
      [nums[nums[i] - 1], nums[i]] = [nums[i], nums[nums[i] - 1]]
    }
  }
  
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] !== i + 1) {
      return [nums[i], i + 1]
    }
  }
};




