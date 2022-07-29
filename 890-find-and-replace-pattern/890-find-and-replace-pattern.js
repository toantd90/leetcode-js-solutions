function isMatchPattern(word, pattern) {
  let match = new Array(26).fill('')
  let chars = new Set()
    
  for (let i = 0; i < word.length; i++) {
    if (match[pattern.charCodeAt(i) - 97]) {
      if (match[pattern.charCodeAt(i) - 97] != word[i]) {
        return false
      }
    } else {
      if (chars.has(word[i])) {
        return false
      }

      match[pattern.charCodeAt(i) - 97] = word[i]
      chars.add(word[i])
    }
  }
  
  return true
}

/**
 * @param {string[]} words
 * @param {string} pattern
 * @return {string[]}
 */
var findAndReplacePattern = function(words, pattern) {
  let matches = []
  
  for (let word of words) {
    if (isMatchPattern(word, pattern)) {
      matches.push(word)
    }
  }
  
  return matches
};