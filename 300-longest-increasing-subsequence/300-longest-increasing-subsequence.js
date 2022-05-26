/**
 * @param {number[]} nums
 * @return {number}
 */
const lengthOfLIS = nums => {
    let dp = new Array(nums.length).fill(1)
    let length = 1
    
    for (let i = 1; i < nums.length; i++) {
        for (let j = 0; j < i; j++) {
            if (nums[j] < nums[i] && dp[i] < dp[j] + 1) {
                dp[i] = dp[j] + 1
                length = Math.max(length, dp[i])
            }
        }
    }
    
    return length
};