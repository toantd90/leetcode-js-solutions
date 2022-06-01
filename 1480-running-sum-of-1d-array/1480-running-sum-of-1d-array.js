/**
 * @param {number[]} nums
 * @return {number[]}
 */
var runningSum = function(nums) {
    let prefixSum = [nums[0]]
    for (let i = 1; i < nums.length; i++) {
        prefixSum[i] = nums[i] + prefixSum[i - 1]
    }
    
    return prefixSum
};