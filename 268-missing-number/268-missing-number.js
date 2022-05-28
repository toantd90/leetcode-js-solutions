/**
 * @param {number[]} nums
 * @return {number}
 */
const missingNumber = nums => nums.length * (nums.length + 1) / 2 - nums.reduce((acc, cur) => acc + cur, 0)