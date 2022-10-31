class NumArray {
  constructor(nums) {
    let sum = [0]
    
    nums.forEach(num => {
      sum.push(sum[sum.length - 1] + num)
    })
    
    this.sum = sum
  }
  
  sumRange(i, j) {
    return this.sum[j + 1] - this.sum[i]
  }
}