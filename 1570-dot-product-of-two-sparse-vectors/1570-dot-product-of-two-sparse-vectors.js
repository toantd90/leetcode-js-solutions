/**
 * @param {number[]} nums
 * @return {SparseVector}
 */
var SparseVector = function(nums) {
  this.nums = nums  
};

// Return the dotProduct of two sparse vectors
/**
 * @param {SparseVector} vec
 * @return {number}
 */
SparseVector.prototype.dotProduct = function(vec) {
  let product = 0
  for (let i = 0; i < this.nums.length; i++) {
      if (this.nums[i] && vec.nums[i]) {
          product += this.nums[i] * vec.nums[i]
      }
  }
    
  return product
};

// Your SparseVector object will be instantiated and called as such:
// let v1 = new SparseVector(nums1);
// let v2 = new SparseVector(nums2);
// let ans = v1.dotProduct(v2);