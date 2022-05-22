/**
 * @param {string} s
 * @return {number}
 */
const countSubstrings = s => {
    const n = s.length
    let dp = new Array(n).fill().map(_ => new Array(n).fill(false))
    let ans = n
    
    for (let i = 0; i < n; i++) {
        dp[i][i] = true
    }
    
    for (let i = 0; i < n - 1; i++) {
        if (s[i] === s[i + 1]) {
            dp[i][i + 1] = true
            ans++
        }
    }
    
    for (let len = 3; len <= n; len++) {
        for (let i = 0, j = i + len - 1; j < n; i++, j++) {
            if (dp[i + 1][j - 1] && s[i] === s[j]) {
                dp[i][j] = true
                ans++
            }
        }
    }
    
    return ans
};