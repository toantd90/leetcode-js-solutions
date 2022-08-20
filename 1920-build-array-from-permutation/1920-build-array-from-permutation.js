/**
 * @param {number[]} nums
 * @return {number[]}
 */
const buildArray = nums => nums.map((num, i) => nums[nums[i]])