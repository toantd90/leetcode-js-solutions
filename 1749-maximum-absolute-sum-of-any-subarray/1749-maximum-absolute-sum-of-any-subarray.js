/**
 * @param {number[]} nums
 * @return {number}
 */
var maxAbsoluteSum = function (nums) {
    let curMin = nums[0];
    let min = nums[0];
    let curMax = nums[0];
    let max = nums[0];

    for (let i = 1; i < nums.length; i++) {
        curMin = Math.min(curMin + nums[i], nums[i]);
        min = Math.min(min, curMin);
        curMax = Math.max(curMax + nums[i], nums[i]);
        max = Math.max(max, curMax);
    }

    const absMin = Math.abs(min);
    if (absMin > max) {
        return absMin;
    }

    return max;
};