/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function(height) {
  let l = 0
  let r = height.length - 1
  let max = 0
  
  while (l < r) {
    if (height[l] < height[r]) {
      max = Math.max(max, height[l] * (r - l))
      l++
    } else {
      max = Math.max(max, height[r] * (r - l))
      r--
    }
  }
  
  return max
};