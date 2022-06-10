/**
 * @param {string} s
 * @return {number}
 */
const lengthOfLongestSubstring = s => {
    let longest = 0
    let l = 0
    let r = 0
    let map = {}
    
    while (r < s.length) {
        map[s[r]] = (map[s[r]] || 0) + 1
        
        while (map[s[r]] > 1) {
            map[s[l]]--
            l++
        }
        
        longest = Math.max(longest, r - l + 1)
        r++
    }
    
    return longest
    
};