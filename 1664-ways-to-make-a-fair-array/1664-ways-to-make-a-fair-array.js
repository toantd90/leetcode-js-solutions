/**
 * @param {number[]} nums
 * @return {number}
 */
function waysToMakeFair(nums) {
  if (nums.length == 1) return 1
  if (nums.length == 2) return 0
  let sums = [nums[0], nums[1]]
  
  for (let i = 2; i < nums.length; i++) {
    sums[i] = nums[i] + sums[i - 2]
  }
  
  let cnt = 0
  const n = nums.length
  
  for (let i = 0; i < nums.length; i++) {
    if (i % 2 == 0) {
      // i chan => i - 1 le => i - 2 chan
      if (n % 2 == 0) {
        // n chan => n - 1 le => n - 2 chan
        if ((sums[i - 1] || 0) + sums[n - 2] - sums[i]  == (sums[i - 2] || 0) + sums[n - 1] - (sums[i - 1] || 0)) {
          cnt++    
        }
      } else {
        if ((sums[i - 1] || 0) + sums[n - 1] - sums[i] == (sums[i - 2] || 0) + sums[n - 2] - (sums[i - 1] || 0)) {
          cnt++
        }
      }
    } else {
      // i le -> i - 1 chan -> i - 2 le
      
      if (n % 2 == 0) {
        // n chan => n - 1 le => n - 2 chan
        if ((sums[i - 1] || 0) + sums[n - 1] - sums[i] == (sums[i - 2] || 0) + sums[n - 2] - (sums[i - 1] || 0) ) {
          cnt++    
        }
      } else {
        if ((sums[i - 1] || 0) + sums[n - 2] - sums[i] == (sums[i - 2] || 0) + sums[n - 1] - sums[i - 1]) {
          cnt++
        }
      }
    }
  }
  
  return cnt
};