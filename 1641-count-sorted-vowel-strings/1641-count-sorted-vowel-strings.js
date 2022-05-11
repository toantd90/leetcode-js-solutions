/**
 * @param {number} n
 * @return {number}
 */
const countVowelStrings = n => {
    let dp = [1, 1, 1, 1, 1]
    
    for (let i = 0; i < n; i++) {
        
        for (let i = 1; i < 5; i++) {
            dp[i] += dp[i - 1] 
        }
    }
    
    return dp[4]
};