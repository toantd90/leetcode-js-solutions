/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    let first = 0
    let last = nums.length - 1
    
    while (first < last) {
        if (nums[first] + nums[last] === target) {
            return [first + 1, last + 1]
        } else if (nums[first] + nums[last] > target) {
            last--
        } else {
            first++
        }
    }
};