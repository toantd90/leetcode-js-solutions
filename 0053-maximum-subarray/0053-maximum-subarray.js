/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function (nums) {
    let curSum = nums[0];
    let maxSum = nums[0];

    for (let i = 1; i < nums.length; i++) {
        curSum = Math.max(curSum + nums[i], nums[i]);
        maxSum = Math.max(maxSum, curSum);
    }

    return maxSum;
};