/**
 * @param {number[]} height
 * @return {number}
 */
function trap(height) {
    const n = height.length;
    let l = 0;
    let r = n - 1;

    let maxLeft = 0;
    let maxRight = 0;
    let ans = 0;

    while (l < r) {
        if (height[r] > height[l]) {
            maxLeft = Math.max(maxLeft, height[l]);
            ans += maxLeft - height[l];
            l++;
        } else {
            maxRight = Math.max(maxRight, height[r]);
            ans += maxRight - height[r];
            r--;
        }
    }

    return ans;
};