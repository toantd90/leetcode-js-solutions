/**
 * @param {number[]} nums
 */
var NumArray = function(nums) {
  let prefixSum = [nums[0]]
  
  for (let i = 1; i < nums.length; i++) {
    prefixSum[i] = prefixSum[i - 1] + nums[i]
  }
  
  this.prefixSum = prefixSum
};

/** 
 * @param {number} left 
 * @param {number} right
 * @return {number}
 */
NumArray.prototype.sumRange = function(left, right) {
  return this.prefixSum[right] - (this.prefixSum[left - 1] || 0)
};

/** 
 * Your NumArray object will be instantiated and called as such:
 * var obj = new NumArray(nums)
 * var param_1 = obj.sumRange(left,right)
 */