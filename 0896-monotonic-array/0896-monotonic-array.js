/**
 * @param {number[]} nums
 * @return {boolean}
 */
const isMonotonic = nums => {
    if (nums.length < 2) return true
    
    if (nums[0] >= nums[nums.length - 1]) {
        for (let i = 1; i < nums.length; i++) {
            if (nums[i] > nums[i - 1])
                return false
        }
    } else {
        for (let i = 1; i < nums.length; i++) {
            if (nums[i] < nums[i - 1])
                return false
        }
    }
    
    return true
};