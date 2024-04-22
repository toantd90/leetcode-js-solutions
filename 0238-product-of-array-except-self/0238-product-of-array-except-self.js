/**
 * @param {number[]} nums
 * @return {number[]}
 */
function productExceptSelf(nums) {
    let product = 1;
    let zeroCount = 0

    for (let num of nums) {
        if (num === 0) {
            zeroCount++
        } else {
            product *= num;
        }
    }

    if (zeroCount > 1) {
        return new Array(nums.length).fill(0);
    } else if (zeroCount === 1) {
        return nums.map(num => num === 0 ? product : 0);
    } else {
        return nums.map(num => product / num);
    }
};