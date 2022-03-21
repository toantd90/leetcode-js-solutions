/**
 * @param {number[]} nums
 * @return {number}
 */
const maximumDifference = nums => {
    let min = nums[0]
    let maxDifference = -1
    for (let i = 1; i < nums.length; i++) {
        if (nums[i] > min) {
            maxDifference = Math.max(maxDifference, nums[i] - min)
        } else {
            min = nums[i]
        }
    }
    
    return maxDifference
};