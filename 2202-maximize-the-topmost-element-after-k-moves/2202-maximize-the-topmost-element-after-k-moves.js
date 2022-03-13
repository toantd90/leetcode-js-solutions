/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
const maximumTop = (nums, k) => {
    if (k === 0) return nums[0]
    if (k === 1) return nums[1] !== undefined ? nums[1] : -1
    if (nums.length === 1) return k % 2 === 0 ? nums[0] : -1
    
    let maxValue = nums[0]
    for (let i = 1; i < Math.min(k - 1, nums.length); i++) {
        if (nums[i] > maxValue) {
            maxValue = nums[i]
        }
    }
    if (k < nums.length) {
        return Math.max(maxValue, nums[k])
    }
    
    return maxValue
    
};