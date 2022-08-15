/**
 * @param {string} pattern
 * @param {string} s
 * @return {boolean}
 */
function wordPattern(pattern, s) {
  const words = s.split(' ')
  let patternMatch = {}
  let wordMatch = {}
  
  if (words.length != pattern.length) return false
   
  for (let i = 0; i < pattern.length; i++) {
    if ((patternMatch[pattern[i]] && patternMatch[pattern[i]] != words[i]) || (wordMatch[words[i]] && wordMatch[words[i]] != pattern[i])) {
      return false
    } else {
      patternMatch[pattern[i]] = words[i]
      wordMatch[words[i]] = pattern[i]
    }
  }
  
  return true
};