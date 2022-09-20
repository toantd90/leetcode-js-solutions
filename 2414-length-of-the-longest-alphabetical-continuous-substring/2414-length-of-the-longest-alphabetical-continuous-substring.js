/**
 * @param {string} s
 * @return {number}
 */
function longestContinuousSubstring(s) {
  let longest = 1
  for (let i = 0; i < s.length; i++) {
    let start = i
    
    while (start < s.length - 1 && s.charCodeAt(start + 1) - s.charCodeAt(start) == 1) {
      start++
    }
    
    longest = Math.max(longest, start - i + 1)
    i = start
  }
  
  return longest
};