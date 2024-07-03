/**
 * @param {number[]} nums
 * @return {number}
 */
var minimumAverage = function (nums) {
    const n = nums.length;
    nums.sort((n1, n2) => n1 - n2);
    let min = 51;

    for (let i = 0; i < (n / 2); i++) {
        min = Math.min(min, (nums[i] + nums[n - 1 - i]) / 2);
    }

    return min;
};