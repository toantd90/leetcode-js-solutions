/**
 * @param {number[]} nums
 * @return {number}
 */
const rob = nums => {
    let dp = [0, nums[0]]
    
    for (let i = 2; i <= nums.length; i++) {
        dp[i] = Math.max(dp[i - 1], dp[i - 2] + nums[i - 1])
    }
    
    return dp[nums.length]
};