/**
 * @param {string} s
 * @return {number}
 */
const lengthOfLongestSubstring = s => {
    if (!s.length) return 0
    let l = 0
    let r = 1
    let curMap = {}
    curMap[s[0]] = true
    let cnt = 1
    
    
    while (r < s.length) {
      if (!curMap[s[r]]) {
          curMap[s[r]] = true
          cnt = Math.max(cnt, r - l + 1)
          r++
      } else {
          while (s[l] !== s[r]) {
              l++
          }
          delete curMap[s[r]]
          l++
      }
    }
    
    return cnt
};