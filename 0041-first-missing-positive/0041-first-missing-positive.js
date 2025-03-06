/**
 * @param {number[]} nums
 * @return {number}
 */
var firstMissingPositive = function (nums) {
    let arr = new Array(1e5 + 1).fill();

    nums.forEach(num => {
        if (num < 0 || num > nums.length) {
        } else {
            arr[num] = num;
        }
    });

    for (let i = 1; i <= nums.length + 1; i++) {
        if (!arr[i]) {
            return i;
        }
    }

    return nums.length;
};