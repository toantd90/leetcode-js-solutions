/**
 * @param {number[]} height
 * @return {number}
 */
const maxArea = (height) => {
  let l = 0;
  let r = height.length - 1;
  let maxWater = 0;

  while (l < r) {
    maxWater = Math.max(maxWater, Math.min(height[l], height[r]) * (r - l));
    // if water on the left is larger than water on the right
    //   we dont need to calculate water l + 1, l + 2, ... to r because [l, r] is max end at r
    // if water on the left is smaller than the water on the right
    //   we don't need to calculate water l ... to r - 2, r - 1 because [l, r] is max start at l
    if (height[l] > height[r]) {
      r--;
    } else {
      l++;
    }
  }

  return maxWater;
};
