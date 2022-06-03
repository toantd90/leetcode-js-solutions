/**
 * @param {string} s
 * @return {number}
 */
var numDecodings = function(s) {
    if (s[0] === '0') return 0
    let dp = new Array(s.length + 1).fill(0)
    dp[0] = 1
    dp[1] = 1
    
    for (let i = 2; i <= s.length; i++) {
        if (s[i - 1] !== '0') {
            dp[i] += dp[i - 1]
        }
        
        if (Number(s[i - 2] + '' + s[i - 1]) <= 26 && s[i - 2] !== '0') {
            dp[i] += dp[i - 2]
        }
    }
    
    return dp[s.length]
};