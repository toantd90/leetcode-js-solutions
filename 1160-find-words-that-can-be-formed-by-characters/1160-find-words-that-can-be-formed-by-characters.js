/**
 * @param {string[]} words
 * @param {string} chars
 * @return {number}
 */
function countCharacters(words, chars) {
  let charsCnt = new Array(26).fill(0)
  
  for (let char of chars) {
    charsCnt[char.charCodeAt(0) - 97]++
  }
  
  let sumLen = 0
  for (let word of words) {
    let charCnt = new Array(26).fill(0)
    for (let char of word) {
      charCnt[char.charCodeAt(0) - 97]++
    }
    
    let isGood = true
    
    for (let i = 0; i < 26; i++) {
      if (charCnt[i] > charsCnt[i]) {
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