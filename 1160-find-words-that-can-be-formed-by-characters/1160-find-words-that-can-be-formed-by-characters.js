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
    
    if (chars.every(char => charCnt[char] <= charsCnt[char])) {
      sumLen += word.length
    }
  }
  
  return sumLen
};