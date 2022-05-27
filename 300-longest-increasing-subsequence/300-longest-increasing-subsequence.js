const binarySearch = (nums, dp, value) => {
    let l = 0
    let r = dp.length - 1
    
    while (l <= r) {
        const mid = l + Math.floor((r - l) / 2)
        
        if (nums[dp[mid]] < value) {
            l++
        } else {
            r--
        }
    }
    
    return l
}

/**
 * @param {number[]} nums
 * @return {number}
 */
const lengthOfLIS = nums => {
    let dp = [0]
    
    for (let i = 1; i < nums.length; i++) {
        if (nums[i] > nums[dp[dp.length - 1]]) {
            dp.push(i)
        } else {
            const index = binarySearch(nums, dp, nums[i])
            
            dp[index] = i
        }
    }
    
    return dp.length
};