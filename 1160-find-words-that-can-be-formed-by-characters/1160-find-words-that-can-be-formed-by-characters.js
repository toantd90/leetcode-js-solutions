/**
 * @param {string[]} words
 * @param {string} chars
 * @return {number}
 */
function countCharacters(words, chars) {
  let charsCnt = {}
  
  for (let char of chars) {
    charsCnt[char] = (charsCnt[char] || 0) + 1
  }
  
  let charWords = []
  let sumLen = 0
  for (let word of words) {
    let charCnt = {}
    let chars = []
    for (let char of word) {
      if (!charCnt[char]) {
        charCnt[char] = 0
        chars.push(char)
      }
      charCnt[char]++
    }
    
    let isGood = true
    
    for (let i = 0; i < chars.length; i++) {
      if (!charsCnt[chars[i]] || charCnt[chars[i]] > charsCnt[chars[i]]) {
        isGood = false
        break
      }
    }
    
    if (isGood) {
      sumLen += word.length
    }
  }
  
  return sumLen
};