/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
const characterReplacement = (s, k) => {
    if (k === s.length) return k
    let l = 0
    let r = 0
    let cnt = {}
    let maxCnt = 0
    let longest = 0
    while (r < s.length) {
        cnt[s[r]] = (cnt[s[r]] || 0) + 1
        maxCnt = Math.max(maxCnt, cnt[s[r]])
        r++
        
        while (r - l - maxCnt > k) {
            cnt[s[l]]--
            l++
        }
        longest = Math.max(longest, r - l)
    }
    
    return longest
};