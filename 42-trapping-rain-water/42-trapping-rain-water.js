/**
 * @param {number[]} height
 * @return {number}
 */
function trap(height) {
  const n = height.length
  let water = 0

  let maxFromLeft = new Array(n).fill(0)
  let maxFromRight = new Array(n).fill(0)
  
  for (let i = 1; i < n; i++) {
    maxFromLeft[i] = Math.max(maxFromLeft[i - 1], height[i - 1])
  }
  
  for (let i = n - 2; i >= 0; i--) {
    maxFromRight[i] = Math.max(maxFromRight[i + 1], height[i + 1])
  }
  
  for (let i = 1; i < n - 1; i++) {
    const max = Math.min(maxFromLeft[i], maxFromRight[i])
    
    if (max > height[i])
      water += max - height[i]
  }
  
  return water
};