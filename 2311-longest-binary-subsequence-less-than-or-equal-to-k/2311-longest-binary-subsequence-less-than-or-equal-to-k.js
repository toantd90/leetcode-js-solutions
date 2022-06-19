/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
var longestSubsequence = function(s, k) {
    const n = s.length
    let curValue = 0
    let res = ''
    
    for (let i = n - 1; i >= 0; i--) {
        if (s[i] === '0') {
            res += s[i]
            continue
        }
        if (curValue + Number(s[i]) * Math.pow(2, res.length) <= k) {
            curValue += Number(s[i]) * Math.pow(2, res.length)
            res = s[i] + res
        }
    }
    
    return res.length
};