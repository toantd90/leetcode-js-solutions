/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function (height) {
    let l = 0;
    let r = height.length - 1;
    let max = Math.min(height[l], height[r]) * (r - l);

    while (l < r) {
        if (height[l] > height[r]) {
            r--;
        } else {
            l++;
        }

        max = Math.max(max, Math.min(height[l], height[r]) * (r - l));
    }

    return max;
};