/**
 * @param {number[]} height
 * @return {number}
 */
function maxArea(height) {
  let l = 0;
  let r = height.length - 1;
  let maxWater = 0;

  while (l < r) {
    if (height[r] > height[l]) {
      maxWater = Math.max(maxWater, (r - l) * height[l]);
      l++;
    } else {
      maxWater = Math.max(maxWater, (r - l) * height[r]);
      r--;
    }
  }

  return maxWater;
}
