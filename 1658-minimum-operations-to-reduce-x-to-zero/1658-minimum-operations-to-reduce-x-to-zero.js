/**
 * @param {number[]} nums
 * @param {number} x
 * @return {number}
 */
var minOperations = function(nums, x) {
    let left = {}
    
    const n = nums.length
    
    let sum = 0
    let ans = n + 1
    
    for (let i = 0; i < n; i++) {
        sum += nums[i]

        if (sum > x) break
        if (sum === x) ans = i + 1
        
        left[x - sum] = i + 1
    }
    
    sum = 0
    for (let i = n - 1; i >= 0; i--) {
        sum += nums[i]
        
        if (sum > x) break
        if (sum === x) ans = Math.min(ans, n - i)       
        if (left[sum]) ans = Math.min(ans, n - i + left[sum])
    }
    
    return ans === n + 1 ? -1 : ans
};