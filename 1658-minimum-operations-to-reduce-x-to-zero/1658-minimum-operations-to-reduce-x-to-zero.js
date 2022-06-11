/**
 * @param {number[]} nums
 * @param {number} x
 * @return {number}
 */
const minOperations = function(nums, x) {
    let left = { 0: -1 }
    let sum = 0
    let ans = nums.length + 1
    for (let i = 0; i < nums.length; i++) {
        sum += nums[i]
        if (sum === x)
            ans = Math.min(ans, i + 1)
        if (sum > x)
            break
        left[sum] = i
    }
    
    sum = 0
    
    for (let i = nums.length - 1; i >= 0; i--) {
        sum += nums[i]
        if (sum > x)
            break
        if (left[x - sum] !== undefined) {
            ans = Math.min(ans, left[x - sum] + 1 + nums.length - i)
        }
    }
    
    return ans === nums.length + 1 ? -1 : ans
};