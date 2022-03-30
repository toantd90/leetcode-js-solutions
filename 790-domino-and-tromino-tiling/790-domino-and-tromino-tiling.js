/**
 * @param {number} n
 * @return {number}
 */
const numTilings = n => {
    if (n === 0) return 0
    
    let dp = [1, 1, 2]
    
    for (let i = 3; i <= n; i++) {
        dp.push((2 * dp[i - 1] + dp[i - 3]) % (1e9 + 7))
    }
    
    return dp[n]
};